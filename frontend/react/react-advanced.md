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


### React symbols

React Lifecycle
UNSAFE_componentWillReceiveProps
static getDerivedStateFromProps()

   , Z = "function" == typeof Symbol && Symbol.for
    , J = Z ? Symbol.for("react.element") : 60103
    , ee = Z ? Symbol.for("react.portal") : 60106
    , te = Z ? Symbol.for("react.fragment") : 60107
    , ne = Z ? Symbol.for("react.strict_mode") : 60108
    , re = Z ? Symbol.for("react.profiler") : 60114
    , le = Z ? Symbol.for("react.provider") : 60109
    , ie = Z ? Symbol.for("react.context") : 60110
    , ae = Z ? Symbol.for("react.concurrent_mode") : 60111
    , oe = Z ? Symbol.for("react.forward_ref") : 60112
    , ue = Z ? Symbol.for("react.suspense") : 60113
    , ce = Z ? Symbol.for("react.suspense_list") : 60120
    , se = Z ? Symbol.for("react.memo") : 60115
    , fe = Z ? Symbol.for("react.lazy") : 60116
    , de = Z ? Symbol.for("react.block") : 60121


### Provider Pattern
Do you know how the Providers pattern works in React?

It uses Context under the hood.

So, if you have Redux, Recoil or Zustand etc, all of them have a Provider at the top level which encloses all the App components.

Then, all of these libraries uses Context as best as they know to share state down the tree.

Providers pattern are basically, under the hood, HOCs which inject state values to the children.

In this way the stare travels down the tree on an alternative way and not via props.

And because that state value is availble to every component in the tree, it may trigger a re-render of each in 2 ways:
- by directly comsuming the value
- because a parent consums it and renders.

### React Debug
Identify the bug in below code for React version less than 17💡

The below code will throw an error "𝗖𝗮𝗻𝗻𝗼𝘁 𝗿𝗲𝗮𝗱 𝗽𝗿𝗼𝗽𝗲𝗿𝘁𝗶𝗲𝘀 𝗼𝗳 𝗻𝘂𝗹𝗹 (𝗿𝗲𝗮𝗱𝗶𝗻𝗴 '𝘃𝗮𝗹𝘂𝗲')", when you type value in the input textbox, If you're using React version less than 17.

Here's a CodeSandbox Demo: https://lnkd.in/dXAandSQ

This is because till React version 17, React used 𝗲𝘃𝗲𝗻𝘁 𝗽𝗼𝗼𝗹𝗶𝗻𝗴 mechanism where the event object was being re-used for different events for performance optimization.

So the event object is set to 𝗻𝘂𝗹𝗹 for every new event and setting state using 𝘀𝗲𝘁𝗨𝘀𝗲𝗿 function in the above code does not change the state value immediately but React just schedules as update to be done later.

So by the time, React tries to access 𝗲𝘃𝗲𝗻𝘁.𝘁𝗮𝗿𝗴𝗲𝘁.𝘃𝗮𝗹𝘂𝗲 inside the 𝘀𝗲𝘁𝗨𝘀𝗲𝗿 call, event has already been set to null.

So to fix this in React version < 17, you have two options:

1. Take out the value to set in 𝘀𝗲𝘁𝗨𝘀𝗲𝗿 beforehand and use it in the 𝘀𝗲𝘁𝗨𝘀𝗲𝗿 call like this:

𝘤𝘰𝘯𝘴𝘵 𝘩𝘢𝘯𝘥𝘭𝘦𝘐𝘯𝘱𝘶𝘵𝘊𝘩𝘢𝘯𝘨𝘦 = (𝘦𝘷𝘦𝘯𝘵) => {
𝘤𝘰𝘯𝘴𝘵 𝘷𝘢𝘭𝘶𝘦 = 𝘦𝘷𝘦𝘯𝘵.𝘵𝘢𝘳𝘨𝘦𝘵.𝘷𝘢𝘭𝘶𝘦;

𝘴𝘦𝘵𝘜𝘴𝘦𝘳((𝘱𝘳𝘦𝘷𝘚𝘵𝘢𝘵𝘦) => {
𝘳𝘦𝘵𝘶𝘳𝘯 {
...𝘱𝘳𝘦𝘷𝘚𝘵𝘢𝘵𝘦,
𝘢𝘨𝘦: 𝘷𝘢𝘭𝘶𝘦
};
});
};

Here's a CodeSandbox Demo: https://lnkd.in/dTPwpE3f

2. Use 𝗲𝘃𝗲𝗻𝘁.𝗽𝗲𝗿𝘀𝗶𝘀𝘁 method to avoid pooling of the event like this:

𝘤𝘰𝘯𝘴𝘵 𝘩𝘢𝘯𝘥𝘭𝘦𝘐𝘯𝘱𝘶𝘵𝘊𝘩𝘢𝘯𝘨𝘦 = (𝘦𝘷𝘦𝘯𝘵) => {
𝘦𝘷𝘦𝘯𝘵.𝘱𝘦𝘳𝘴𝘪𝘴𝘵();

𝘴𝘦𝘵𝘜𝘴𝘦𝘳((𝘱𝘳𝘦𝘷𝘚𝘵𝘢𝘵𝘦) => {
𝘳𝘦𝘵𝘶𝘳𝘯 {
...𝘱𝘳𝘦𝘷𝘚𝘵𝘢𝘵𝘦,
𝘢𝘨𝘦: 𝘦𝘷𝘦𝘯𝘵.𝘵𝘢𝘳𝘨𝘦𝘵.𝘷𝘢𝘭𝘶𝘦
};
});
};

Here's a CodeSandbox Demo: https://lnkd.in/dBSM_Xez

𝗜𝗳 𝘆𝗼𝘂'𝗿𝗲 𝘂𝘀𝗶𝗻𝗴 𝗥𝗲𝗮𝗰𝘁 𝘃𝗲𝗿𝘀𝗶𝗼𝗻 𝟭𝟳 𝗮𝗻𝗱 𝗮𝗯𝗼𝘃𝗲, 𝘆𝗼𝘂 𝗱𝗼𝗻'𝘁 𝗻𝗲𝗲𝗱 𝘁𝗼 𝘂𝘀𝗲 𝗲𝘃𝗲𝗻𝘁.𝗽𝗲𝗿𝘀𝗶𝘀𝘁 𝗮𝗻𝗱 𝘆𝗼𝘂 𝗰𝗮𝗻 𝘂𝘀𝗲 𝗲𝘃𝗲𝗻𝘁.𝘁𝗮𝗿𝗴𝗲𝘁.𝘃𝗮𝗹𝘂𝗲 𝗱𝗶𝗿𝗲𝗰𝘁𝗹𝘆 𝗶𝗻 𝘀𝗲𝘁𝗨𝘀𝗲𝗿 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻.

Here's a CodeSandbox Demo: https://lnkd.in/dS6qAUij

𝗖𝗵𝗲𝗰𝗸 𝗼𝘂𝘁 𝘁𝗵𝗲 𝗹𝗶𝗻𝗸 𝗶𝗻 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗲𝗻𝘁 𝘁𝗼 𝘀𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 𝘁𝗼 𝗺𝘆 𝘄𝗲𝗲𝗸𝗹𝘆 𝗻𝗲𝘄𝘀𝗹𝗲𝘁𝘁𝗲𝗿 𝗮𝗻𝗱 𝗴𝗲𝘁 𝗮𝗺𝗮𝘇𝗶𝗻𝗴 𝗰𝗼𝗻𝘁𝗲𝗻𝘁 𝗱𝗶𝗿𝗲𝗰𝘁𝗹𝘆 𝗶𝗻 𝘆𝗼𝘂𝗿 𝗶𝗻𝗯𝗼𝘅.

### Large React Project
- Multiple folders containing different components.

In such cases, If you're using different components in a particular file, your file will contain a lot of import statements like this:

𝘪𝘮𝘱𝘰𝘳𝘵 𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭 𝘧𝘳𝘰𝘮 './𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵𝘴/𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭/𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭';
𝘪𝘮𝘱𝘰𝘳𝘵 𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳 𝘧𝘳𝘰𝘮 './𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵𝘴/𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳/𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳';
𝘪𝘮𝘱𝘰𝘳𝘵 𝘛𝘰𝘰𝘭𝘵𝘪𝘱 𝘧𝘳𝘰𝘮 './𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵𝘴/𝘛𝘰𝘰𝘭𝘵𝘪𝘱/𝘛𝘰𝘰𝘭𝘵𝘪𝘱';
𝘪𝘮𝘱𝘰𝘳𝘵 𝘉𝘶𝘵𝘵𝘰𝘯 𝘧𝘳𝘰𝘮 './𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵𝘴/𝘉𝘶𝘵𝘵𝘰𝘯/𝘉𝘶𝘵𝘵𝘰𝘯';
𝘪𝘮𝘱𝘰𝘳𝘵 𝘈𝘷𝘢𝘵𝘢𝘳 𝘧𝘳𝘰𝘮 './𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵𝘴/𝘈𝘷𝘢𝘵𝘢𝘳/𝘈𝘷𝘢𝘵𝘢𝘳';

which does not look good because as the number of components increases, the imports count will also increase.

So, you can create an index.js file in the parent folder(components) folder and export all the components as a named export from that file like this:

𝘦𝘹𝘱𝘰𝘳𝘵 { 𝘥𝘦𝘧𝘢𝘶𝘭𝘵 𝘢𝘴 𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭 } 𝘧𝘳𝘰𝘮 './𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭/𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭';
𝘦𝘹𝘱𝘰𝘳𝘵 { 𝘥𝘦𝘧𝘢𝘶𝘭𝘵 𝘢𝘴 𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳 } 𝘧𝘳𝘰𝘮 './𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳/𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳';
𝘦𝘹𝘱𝘰𝘳𝘵 { 𝘥𝘦𝘧𝘢𝘶𝘭𝘵 𝘢𝘴 𝘛𝘰𝘰𝘭𝘵𝘪𝘱 } 𝘧𝘳𝘰𝘮 './𝘛𝘰𝘰𝘭𝘵𝘪𝘱/𝘛𝘰𝘰𝘭𝘵𝘪𝘱';
𝘦𝘹𝘱𝘰𝘳𝘵 { 𝘥𝘦𝘧𝘢𝘶𝘭𝘵 𝘢𝘴 𝘉𝘶𝘵𝘵𝘰𝘯 } 𝘧𝘳𝘰𝘮 './𝘉𝘶𝘵𝘵𝘰𝘯/𝘉𝘶𝘵𝘵𝘰𝘯';
𝘦𝘹𝘱𝘰𝘳𝘵 { 𝘥𝘦𝘧𝘢𝘶𝘭𝘵 𝘢𝘴 𝘈𝘷𝘢𝘵𝘢𝘳 } 𝘧𝘳𝘰𝘮 './𝘈𝘷𝘢𝘵𝘢𝘳/𝘈𝘷𝘢𝘵𝘢𝘳';

This needs to be done only once.

Now, If in any of the files you want to access any component, you can easily import it using named import in a single line like this:

𝘪𝘮𝘱𝘰𝘳𝘵 { 𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭, 𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳, 𝘛𝘰𝘰𝘭𝘵𝘪𝘱, 𝘉𝘶𝘵𝘵𝘰𝘯, 𝘈𝘷𝘢𝘵𝘢𝘳 } 𝘧𝘳𝘰𝘮 './𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵𝘴';

This is standard practice when working on large industry/company projects.


Each component / set of components living in each folder can be exported in the same manner.
This is called “barreling” or “barrel exports”.

But make sure that export components are not using the other components from the same index file as it will be a circular dependency.

Eg, Button component should not import ConfirmModal as
import { ConfirmModal } from './components ' instead
import ConfirmModal from './components/ConfirmModal/ConfirmModal.


### React Wrapper
// https://github.com/diegohaz/arc/wiki/Example-components#icon
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const fontSize = ({ width, height }) => {
  const size = width || height
  return size ? `${size / 16}rem` : '1.25em'
}

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  color: ${ifProp('palette', palette({ grayscale: 0 }, 1), 'currentcolor')};
  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;
  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }
`

const Icon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

export default Icon
