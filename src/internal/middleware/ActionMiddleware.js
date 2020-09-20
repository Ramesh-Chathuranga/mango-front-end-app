// import {_} from 'AppUtils';
import _ from 'lodash'
import {AllHandlers} from '../modules/Handlers';
import { NetworkError } from '../models/index';
import {appHistory} from '../core/StoreCreator';

/**
 * bind the handlers
 */
export const actionMiddleware = args => {
  return ({dispatch, getState}) => next => action => {
    const handlers = AllHandlers[action.type];
    //_.defer(() => {
    //// params for the handler is defined here. AppState is sent directly as an object.
    //// Check wether we need to make it a function to invoke after updates
    //_.forEach(handlers, handler => handler({ dispatch, payload: action.payload, appState: getState() }));
    //}, 'deferred');
    //
    const {payload: data, error, type} = action;

    if (error) {
      if (data instanceof NetworkError) {
        //dispatch(Actions.common.networkError(action));
      } else {
        if (error.code) {
          // logger.error(`Unhandled probable network error in ${type} : ${JSON.stringify(error)} `)
        } else {
          // logger.warn(`Unhandled error in ${type} : ${JSON.stringify(error)} `)
        }
      }
    }

    //if (typeof action === 'function') {
      //try {
        //return action(dispatch, getState, args);
      //} catch (e) {
        //if (e instanceof NetworkError) {
          //console.log(e.code + ': ' + e.messages);
          //if (e.code === 403) {
            //// back to sign in
            //// dispatch
          //}
        //}
      //}
    //}

    const nextAction = next(action);

    _.forEach(handlers, handler => {
      console.log(handler);
      handler({dispatch, payload: action.payload, appState: getState(), error, pathname: appHistory.location.pathname});
    });

    return nextAction;
  };
};

export default actionMiddleware;
