import { ModuleEvents } from './Actions';
import {Actions} from "../../internal/modules/Actions";
import {store, appHistory} from "../../internal/core/StoreCreator";

export default {
    [ModuleEvents.LOGIN_USER]: ({ dispatch, payload, appState }) => {
        if(payload && payload.user && payload.user.uid){
            dispatch(Actions.user.getUserData(payload.uid));
            dispatch(Actions.hotel.getHotelList());
            dispatch(Actions.hotel.getRoomList());
        }
    },
    [ModuleEvents.SING_UP]: ({ dispatch, payload, appState }) => {
        if(payload && payload.user && payload.user.uid){
            dispatch(Actions.user.getUserData(payload.uid));
            dispatch(Actions.hotel.getHotelList());
            dispatch(Actions.hotel.getRoomList());
        }
    },
    [ModuleEvents.GET_USER_DATA]: ({ dispatch, payload, appState }) => {

        if(payload && !payload.error){
            dispatch(Actions.hotel.commonNavigation(payload.path));
        }
    },
    [ModuleEvents.UPDATE_USER]: ({ dispatch, payload, appState }) => {
        if(payload && !payload.error){
            dispatch(Actions.user.getUserData(payload.data.uid,'/booking'));
        }
    },
    [ModuleEvents.BOOKING]: ({ dispatch, payload, appState }) => {
        if(payload && !payload.error){
            dispatch(Actions.hotel.commonNavigation('/'));
        }
    },

}