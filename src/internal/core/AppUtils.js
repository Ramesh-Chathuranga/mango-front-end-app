import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const isServer = typeof window === 'undefined' || typeof document === 'undefined';

const createAction = (type, action, meta) => {
  return (...args) => ({ type, payload: action.apply(null, args), meta })
};

export {
  _,
  createAction,
  isServer,
  connect,
  React,
  ReactDOM,
};

