import {navigate} from '../../internal/repository/Navigation.service';
import { ModuleEvents } from './Actions';
import {Actions} from "../../internal/modules/Actions";

export default {
    [ModuleEvents.COMMEN_NAVIGATION]: ({ dispatch, payload, appState }) => {
        navigate(payload);
    },
    [ModuleEvents.KEEP_RESERVATION_DATA]: ({ dispatch, payload, appState }) => {
        dispatch(Actions.hotel.commonNavigation('/booking'));
    }
}