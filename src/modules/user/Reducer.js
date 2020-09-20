import React from 'react';
import {List, Map} from 'immutable';
import {ModuleEvents} from './Actions';
import _ from 'lodash';

const initialState = Map({
  currentUser: null,
  authentication: {},
});

export const Reducer = (state = initialState, action) => {
    const {error,payload, type} = action;
    if (error || (payload && payload.error)) {
        return state;
      }
    switch (type) {
        case ModuleEvents.LOGIN_USER :{
            if(payload){
                return state.set('authentication',payload);
            }
            return state;
        };
        
        case ModuleEvents.SING_UP:{
            if(payload){
                return state.set('authentication',payload);
            }
            return state;
        }
         
        case ModuleEvents.GET_USER_DATA:{
            if(payload){
                return state.set('currentUser',payload.user);
            }
            return state;
        }

        case ModuleEvents.UPDATE_USER: {
            if(payload && !payload.error){

            }
            return state;
        }
        default: return state;
    }
};