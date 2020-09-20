import {createAction} from '../../internal/core/AppUtils';
import React from 'react';
import HotelRepository from "../../internal/repository/HotelRepository";
import RoomRepository from "../../internal/repository/RoomRepository";
import _ from 'lodash';

export const ModuleEvents = {
  COMMEN_NAVIGATION: "COMMEN_NAVIGATION",
  KEEP_RESERVATION_DATA: "KEEP_RESERVATION_DATA",
  GET_HOTEL_LIST:"GET_HOTEL_LIST",
  GET_ROOM_LIST: "GET_ROOM_LIST",
  GET_PENDING_RESERVATION:"GET_PENDING_RESERVATION",
};

export default {
  commonNavigation: createAction(ModuleEvents.COMMEN_NAVIGATION, value => value),
  keepReservationData: createAction(ModuleEvents.KEEP_RESERVATION_DATA, value => value),
  getHotelList: createAction(ModuleEvents.GET_HOTEL_LIST, async() => {
    return await HotelRepository.getAllHotelList();
  }),
  getRoomList: createAction(ModuleEvents.GET_ROOM_LIST, async() => {
    return await RoomRepository.getAllRoomList();
  }),
};


