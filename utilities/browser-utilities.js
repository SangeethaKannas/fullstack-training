export const isPhonePeBrowser = () => {
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    if (navigator.userAgent.indexOf('phonepe') !== -1) {
      return true;
    }
  }
  return false;
};

export const isPaytmBrowser = () => {
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    if (navigator.userAgent.indexOf('AppContainer') !== -1) {
      return true;
    }
  }
  return false;
};

//// Get device
export const deviceTypes = {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP',
};

const getDeviceTypeByWidth = () => {
  let width = null;
  if (window) width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  else width = 360;

  if (width <= 1023) return deviceTypes.MOBILE;
  if (width > 1023) return deviceTypes.DESKTOP;
  // if (width > 768 && width <= 1023) return deviceTypes.TABLET;
  // if (width > 1023) return deviceTypes.DESKTOP;

  return deviceTypes.MOBILE;
};


const getCurrentPathAndSearch = (withSearchString = true) => {
  if (typeof window !== "undefined" && typeof window.location !== "undefined") {
    return {
      path: window.location.pathname,
      ...(withSearchString ? { search: window.location.search } : {}),
    };
  }
  return {
    path: null,
    ...(withSearchString ? { search: null } : {}),
  };
};

import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import { connect } from 'react-redux';
import s from '../components/variables.css';
import { setDeviceType } from '../actions/device';
import { deviceTypes } from '../_services/device';

const HideOnMobile = (props) => {
  useStyles(s);
  if (props.isCrawlerRequest) return <div className={s.hideOnMobile}>{props.children}</div>;

  return (
    <>
      {props.noParent && (props.device !== deviceTypes.MOBILE) && <>{props.children}</>}
      {!props.noParent && (
        <>
          {props.device !== deviceTypes.MOBILE ? (
            <div className={s.hideOnMobile} style={props.customStyle ? {...props.customStyle} : {}}>{props.children}</div>
          ) : null}
        </>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    setDeviceAction: (value) => dispatch(setDeviceType(value)),
  };
}

/////////////////////////////////////////// HIde on PCs
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import { connect } from 'react-redux';
import s from '../components/variables.css';
import { setDeviceType } from '../actions/device';
import { deviceTypes } from '../_services/device';

const HideOnPC = (props) => {
  useStyles(s);

  if (props.isCrawlerRequest) return <div className={s.hideOnPc}>{props.children}</div>;
  return (
    <>
      {props.device !== deviceTypes.DESKTOP ? (
        <div className={s.hideOnPc} style={props.style}>{props.children}</div>
      ) : null}
    </>
  );
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    setDeviceAction: (value) => dispatch(setDeviceType(value)),
  };
}

/////////////////////////////////////////  HIde on Tablets
import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import { connect } from 'react-redux';
import s from '../components/variables.css';
import { setDeviceType } from '../actions/device';
import { deviceTypes } from '../_services/device';

const HideOnTabPC = (props) => {
  useStyles(s);

  if (props.isCrawlerRequest) return <div className={s.hideOnPcTab}>{props.children}</div>

  return (
    <>
      {props.device !== deviceTypes.TABLET
      && props.device !== deviceTypes.DESKTOP ? (
        <div className={s.hideOnPcTab}>{props.children}</div>
        ) : null}
    </>
  );
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    setDeviceAction: (value) => dispatch(setDeviceType(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HideOnTabPC);

