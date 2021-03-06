import React from "react";
import { List, Map } from "immutable";
import { ModuleEvents } from "./Actions";
import _ from "lodash";

const initialState = Map({
  tempBookingData: {},
  hotelList: [],
  roomList: [],
  getcardData: [],
});

export const Reducer = (state = initialState, action) => {
  const { payload, type, error } = action;
  if (error || (payload && payload.error)) {
    return state;
  }
  switch (type) {
    case ModuleEvents.KEEP_RESERVATION_DATA: {
      return state.set("tempBookingData", payload);
    }

    case ModuleEvents.GET_HOTEL_LIST: {
      if (payload) {
        return state.set("hotelList", payload);
      }
      return state;
    }
    case ModuleEvents.GET_ROOM_LIST: {
      if (payload) {
        return state.set("roomList", payload);
      }
      return state;
    }
    case ModuleEvents.GET_ALL_CARD_DATA: {
      if (payload) {
        return state.set("getcardData", payload);
      }
      return state;
    }
    case ModuleEvents.GET_CARD_DATA_BY_GENDER: {
      if (payload) {
        return state.set("getcardData", payload);
      }
      return state;
    }

    default:
      return state;
  }
};
