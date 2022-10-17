### Abort Controller

useEffect(() => {
  const abortController = new AbortController();
  const fetch = async () => {
    try {
      const data = await fetch('a', { signal: abortController.signal});

      setData(data)

    }catch(error) {

    }

  };
  fetch();
  return () => abortController.abort();

}, [])


### Is Mounted

import { useEffect, uesRef } from 'react';

const useIsMounted = () => {

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    }

  }, []);

  const getIsMounted = () => {
    return isMounted.current;
  }


  reurn getIsMounted;
}


### Video Player
import React, { useCallback, useEffect, useRef, useState } from 'react';
import usePreviousHook from '../../CustomHooks/usePreviousHook';
import { attachHLSMediaToVideo, VIDEO_ERROR_CODES } from './Video';
import { hslVideoUrl } from 'qs-services/VideoUpload/UploadVideos/Api';
import './styles.scss';

export default function VideoPlayer({
  onVideoMount,
  className,
  videoId,
  videoUrl,
  seekTo,
  withAudio,
  controls
}) {
  const videoRef = useRef();
  const videoProcessing = useRef({});
  const [videoError, setVideoError] = useState(false);

  const [previousVideoError] = usePreviousHook({ values: [videoError] });

  const loadVideo = useCallback(() => {
    attachHLSMediaToVideo({
      videoRef: videoRef.current,
      videoSrcs: videoUrl || hslVideoUrl(videoId)
    })
      .then(({ onDone } = {}) => {
        videoProcessing.current.onDone = onDone;
      })
      .catch(({ code } = {}) => {
        if (
          code === VIDEO_ERROR_CODES.HLS_MODULE_LOAD ||
          code === VIDEO_ERROR_CODES.HLS_VIDEO_LOAD
        ) {
          setVideoError({ retry: true, message: 'An error occured during playback' });
          return;
        }

        if (code === VIDEO_ERROR_CODES.HLS_UNSUPPORTED) {
          setVideoError({
            message: 'Video playback is not supported on your device'
          });
          return;
        }

        if (code === VIDEO_ERROR_CODES.INTERNAL_CODE_ERROR) {
          setVideoError({
            message: 'An internal error occured during playback'
          });
          return;
        }

        setVideoError({
          message: 'Something went wrong while processing this video'
        });
      });
  }, [videoUrl, videoId]);

  useEffect(() => {
    loadVideo();
  }, [loadVideo]);

  useEffect(() => {
    if (videoRef.current && typeof seekTo === 'number') {
      videoRef.current.currentTime = seekTo;
    }
  }, [seekTo]);

  useEffect(() => {
    // On click of retry the error will be cleared. Hence check with the previous data
    if (previousVideoError && previousVideoError.retry && !videoError) {
      loadVideo();
    }
  }, [loadVideo, videoError, previousVideoError]);

  const clearVideoResources = useCallback(() => {
    if (typeof videoProcessing.current.onDone === 'function') {
      videoProcessing.current.onDone();
    }
  }, []);

  useEffect(
    () => () => {
      clearVideoResources();
    },
    [clearVideoResources]
  );

  const handleVideoRef = useCallback(
    ref => {
      videoRef.current = ref;
      onVideoMount(ref);
    },
    [onVideoMount]
  );

  const onRetryVideo = () => {
    setVideoError();
    clearVideoResources();
  };

  if (videoError) {
    const { message, retry } = videoError;
    return (
      <div className={`video-error-container`}>
        <span>{message}</span>
        {retry && (
          <button className="retry-button" onClick={onRetryVideo}>
            Retry
          </button>
        )}
      </div>
    );
  }

  return (
    <video controls={controls} muted={!withAudio} ref={handleVideoRef} className={className} />
  );
}








const LAZY_COMPONENTS = {
  VIDEO_HLS: 'VIDEO_HLS'
};

export const VIDEO_ERROR_CODES = {
  INTERNAL_CODE_ERROR: 1000,
  HLS_UNSUPPORTED: 1001,
  HLS_MODULE_LOAD: 1002,
  HLS_VIDEO_LOAD: 1003,
  HLS_UNHANDLED: 1004,
  HLS_INTERNAL_VIDEO_ERROR: 1005
};

let lazyRouteComponents = {};

const setLazyComponent = (key, component) => {
  lazyRouteComponents[key] = component;
};

const getLazyComponent = key => lazyRouteComponents[key];

const isVideoPlaybackPossible = ({ videoRef, videoSrcs }) => {
  return Array.isArray(videoSrcs) && videoSrcs.length >= 0 && videoRef;
};

const isAutoPlayBlocked = error => {
  const { name, code } = error;

  // Indicates that auto play is not supported, gracefully return
  if (name === 'NotSupportedError' || code === 9) {
    return true;
  }
  return false;
};

export const handleLoadNativeBrowserVideo = ({ videoRef, videoSrcs }) =>
  new Promise((resolve, reject) => {
    if (!isVideoPlaybackPossible({ videoRef, videoSrcs })) {
      reject({
        code: VIDEO_ERROR_CODES.INTERNAL_CODE_ERROR
      });
      return;
    }

    const onComplete = () => {
      resolve();
      clearHandlers();
    };

    const handleError = ({ code, browserError }) => {
      reject({ code });
      clearHandlers();

      if (browserError) {
        // logException(new Error('Failed to load video using native HLS'), {
        //   error: browserError,
        //   srcs: videoSrcs
        // });
        console.log('Failed to load video using native HLS');
      }
    };

    let videoIndex = 0;
    const loadVideoSource = () => {
      const currentVideoSrc = videoSrcs[videoIndex];
      if (!currentVideoSrc) {
        return;
      }

      videoIndex += 1;
      videoRef.src = currentVideoSrc;
    };

    const processDataLoaded = () => {
      Promise.resolve(videoRef.play()).catch(playError => {
        if (isAutoPlayBlocked(playError)) {
          onComplete();
          return;
        }

        handleError({
          code: VIDEO_ERROR_CODES.HLS_INTERNAL_VIDEO_ERROR,
          browserError: playError
        });
      });
    };

    const errorHandler = () => {
      if (videoIndex < videoSrcs.length) {
        loadVideoSource();
        return;
      }

      let errorCode = VIDEO_ERROR_CODES.HLS_INTERNAL_VIDEO_ERROR;
      let browserError = videoRef.error;
      if (videoRef.error.code === 1 || videoRef.error.code === 2) {
        errorCode = VIDEO_ERROR_CODES.HLS_VIDEO_LOAD;
        browserError = null;
      }

      handleError({ code: errorCode, browserError });
    };

    const onPlay = () => {
      onComplete();
    };

    const clearHandlers = () => {
      // Push removal to the end of the queue
      setTimeout(() => {
        videoRef.removeEventListener('play', onPlay);
        videoRef.removeEventListener('error', errorHandler);
        videoRef.removeEventListener('canplay', processDataLoaded);
      }, 0);
    };

    videoRef.addEventListener('error', errorHandler);
    videoRef.addEventListener('canplay', processDataLoaded);
    videoRef.addEventListener('play', onPlay);
    loadVideoSource();
  });

export const browserSupportsHLS = videoRef => {
  if (!videoRef) {
    return false;
  }
  return videoRef.canPlayType('application/vnd.apple.mpegurl');
};

export const handleLoadHlsLibVideo = ({ numRetries, videoSrcs, videoRef }) =>
  new Promise((resolve, reject) => {
    const Hls = getLazyComponent(LAZY_COMPONENTS.VIDEO_HLS);
    if (!Hls || !isVideoPlaybackPossible({ videoRef, videoSrcs })) {
      reject({
        code: VIDEO_ERROR_CODES.INTERNAL_CODE_ERROR
      });
      return;
    }

    // Below variables will be used for retry of media error if it needs to be handled
    /* let mediaRetries = numRetries;
    let quickMediaFailure = false;
    let mediaErrorTimer = null; */
    let videoIndex = 0;

    const hls = new Hls({
      manifestLoadingMaxRetry: numRetries,
      manifestLoadingRetryDelay: 5000
    });

    const loadVideoSrc = () => {
      const currentVideoSrc = videoSrcs[videoIndex];
      if (!currentVideoSrc) {
        return;
      }

      videoIndex += 1;
      hls.loadSource(currentVideoSrc);
    };

    const cleanupHlsResources = () => {
      hls.destroy();
    };

    const retriesExhaustedForSrc = ({ code, libError }) => {
      if (videoIndex < videoSrcs.length) {
        /* mediaRetries = numRetries;
        quickMediaFailure = false;
        clearTimeout(mediaErrorTimer);
        mediaErrorTimer = null; */

        loadVideoSrc();
        return;
      }

      videoRef.removeEventListener('play', playHandler);
      cleanupHlsResources();
      reject({ code });
      if (libError) {
        // logException(new Error('Failed to load video using HLS lib'), {
        //   code: libError,
        //   srcs: videoSrcs
        // });
        console.log('Failed to load video using native HLS');
      }
    };

    const processHlsErrorEvent = (_, data) => {
      if (!data.fatal) {
        return;
      }
      console.log('data', data);
      switch (data.type) {
        case Hls.ErrorTypes.NETWORK_ERROR:
          retriesExhaustedForSrc({ code: VIDEO_ERROR_CODES.HLS_VIDEO_LOAD });
          break;
        // Leaving below as commented so that if media error needs to be handled then
        // the below code can come handy
        /* case Hls.ErrorTypes.MEDIA_ERROR:
          if (mediaRetries === 0) {
            retriesExhaustedForSrc({ code: VIDEO_ERROR_CODES.HLS_INTERNAL_VIDEO_ERROR });
            return;
          }

          if (quickMediaFailure) {
            hls.swapAudioCodec();
          }

          hls.recoverMediaError();
          quickMediaFailure = true;
          clearTimeout(mediaErrorTimer);
          mediaErrorTimer = setTimeout(() => {
            quickMediaFailure = false;
          }, 200);
          mediaRetries--;
          break; */
        default:
          retriesExhaustedForSrc({ code: VIDEO_ERROR_CODES.HLS_UNHANDLED, libError: data });
          break;
      }
    };

    const processMediaAttached = () => {
      loadVideoSrc();
    };

    const processManifestParsed = () => {
      Promise.resolve(videoRef.play()).catch(playError => {
        if (isAutoPlayBlocked(playError)) {
          videoRef.removeEventListener('play', playHandler);
          resolve({
            onDone: cleanupHlsResources
          });
          return;
        }

        retriesExhaustedForSrc({
          code: VIDEO_ERROR_CODES.HLS_INTERNAL_VIDEO_ERROR,
          libError: playError
        });
      });
    };

    const playHandler = () => {
      // For safety unsubscribe from these events as they are no longer needed
      // once video starts playing
      hls.off(Hls.Events.ERROR, processHlsErrorEvent);
      hls.off(Hls.Events.MEDIA_ATTACHED, processMediaAttached);
      hls.off(Hls.Events.MANIFEST_PARSED, processManifestParsed);

      resolve({
        onDone: cleanupHlsResources
      });

      // Push removal to the end of the queue. Once listener to resolve
      setTimeout(() => {
        videoRef.removeEventListener('play', playHandler);
      }, 1);
    };

    videoRef.addEventListener('play', playHandler);
    hls.on(Hls.Events.ERROR, processHlsErrorEvent);
    hls.on(Hls.Events.MEDIA_ATTACHED, processMediaAttached);
    hls.on(Hls.Events.MANIFEST_PARSED, processManifestParsed);
    hls.attachMedia(videoRef);
  });

const attachToVideo = ({ videoRef, videoSrcs, numRetries = 1 }) =>
  new Promise((resolve, reject) => {
    const Hls = getLazyComponent(LAZY_COMPONENTS.VIDEO_HLS);
    if (!Hls) {
      reject({
        code: VIDEO_ERROR_CODES.INTERNAL_CODE_ERROR
      });
      return;
    }

    if (!Hls.isSupported()) {
      if (browserSupportsHLS(videoRef)) {
        handleLoadNativeBrowserVideo({ videoRef, videoSrcs })
          .then(resolve)
          .catch(reject);
        return;
      }

      reject({
        code: VIDEO_ERROR_CODES.HLS_UNSUPPORTED
      });
      return;
    }

    handleLoadHlsLibVideo({ numRetries, videoSrcs, videoRef })
      .then(resolve)
      .catch(reject);
  });

export const attachHLSMediaToVideo = async ({ videoRef, videoSrcs }) => {
  if (!isVideoPlaybackPossible({ videoRef, videoSrcs })) {
    return Promise.reject({
      code: VIDEO_ERROR_CODES.INTERNAL_CODE_ERROR
    });
  }

  let Hls = getLazyComponent(LAZY_COMPONENTS.VIDEO_HLS);
  if (!Hls) {
    return import(/* webpackChunkName: "hlsvideo" */ /* webpackPrefetch: true */ 'hls.js')
      .then(({ default: Hls }) => {
        setLazyComponent(LAZY_COMPONENTS.VIDEO_HLS, Hls);
      })
      .catch(() =>
        Promise.reject({
          code: VIDEO_ERROR_CODES.HLS_MODULE_LOAD
        })
      )
      .then(() => attachToVideo({ videoRef, videoSrcs }));
  }

  return attachToVideo({ videoRef, videoSrcs });
};

### React textfield
import React from "react";
import { TextField } from "@material-ui/core";

export const renderField = ({ input, placeholder, label, type, value, helperText, meta: { touched, error, warning }, ...props }) => (
  <div className={`renderFieldWrapper ${touched && (error || warning) ? "error" : ""}`}>
    <div>
      <TextField {...input} {...props} value={value} placeholder={placeholder} type={type} fullWidth label={label} helperText={helperText} autoComplete="off" />
      {touched && ((error && <p className="error">{error}</p>) || (warning && <p>{warning}</p>))}
      <span />
    </div>
  </div>
);

export { email, required, phone, password } from "./validators";
