import { createAction } from "../../internal/core/AppUtils";
import React from "react";
import HotelRepository from "../../internal/repository/HotelRepository";
import RoomRepository from "../../internal/repository/RoomRepository";
import CardRepository from "../../internal/repository/CardRepository";
import _ from "lodash";

export const ModuleEvents = {
  COMMEN_NAVIGATION: "COMMEN_NAVIGATION",
  KEEP_RESERVATION_DATA: "KEEP_RESERVATION_DATA",
  GET_HOTEL_LIST: "GET_HOTEL_LIST",
  GET_ROOM_LIST: "GET_ROOM_LIST",
  GET_PENDING_RESERVATION: "GET_PENDING_RESERVATION",
  GET_ALL_CARD_DATA: "GET_ALL_CARD_DATA",
  GET_CARD_DATA_BY_GENDER: "GET_CARD_DATA_BY_GENDER",
};

export default {
  commonNavigation: createAction(
    ModuleEvents.COMMEN_NAVIGATION,
    (value) => value
  ),
  keepReservationData: createAction(
    ModuleEvents.KEEP_RESERVATION_DATA,
    (value) => value
  ),
  getHotelList: createAction(ModuleEvents.GET_HOTEL_LIST, async () => {
    return await HotelRepository.getAllHotelList();
  }),
  getRoomList: createAction(ModuleEvents.GET_ROOM_LIST, async () => {
    return await RoomRepository.getAllRoomList();
  }),
  getAllCardData: createAction(ModuleEvents.GET_ALL_CARD_DATA, async () => {
    return await CardRepository.getAllActorsList();
  }),
  getCardDataByGender: createAction(
    ModuleEvents.GET_CARD_DATA_BY_GENDER,
    async (gender) => {
      return await CardRepository.getCardByGender({
        type: "gender",
        value: gender,
      });
    }
  ),
};
