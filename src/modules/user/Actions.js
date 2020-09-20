import {createAction} from '../../internal/core/AppUtils';
import AuthRepository from "../../internal/repository/AuthRepository";
import UserRepository from "../../internal/repository/UserRepository";
import BookingRepository from "../../internal/repository/BookingRepository";
import _ from 'lodash';

export const ModuleEvents = {
  LOGIN_USER: "LOGIN_USER",
  SING_UP:"SING_UP",
  GET_USER_DATA:"GET_USER_DATA",
  UPDATE_USER:"UPDATE_USER",
  BOOKING:"BOOKING",
};

export default {
  loginUser: createAction(ModuleEvents.LOGIN_USER,async params => {
    try{
      const data = await AuthRepository.login(params);
      return data;
    } catch(error){
      return {error}
    }
  }),
  singUp: createAction(ModuleEvents.SING_UP, async (data) =>{
    const auth = await AuthRepository.signup(data.auth);
    debugger;
    let result = {};
    if(auth.uid){
      const newObj = {...data.object, uid:auth.user.uid}
       await UserRepository.createUser({uid:auth.uid,object:newObj});
    }
    return auth;
  }),

  getUserData: createAction(ModuleEvents.GET_USER_DATA, async (uid, path='/') =>{
    try{
      const user =await UserRepository.getAUserData(uid);
      return {user:user.data[0], path};
    }catch(error){
      return {error};
    }
  }),

  updateUser: createAction(ModuleEvents.UPDATE_USER, async data=>{
    try{
     const userData = await UserRepository.updateUser(data);
     return {userData,data};
    }catch(error){
      console.info("error :",error);
      return{error}
    }
  }),

  booking: createAction(ModuleEvents.BOOKING, async data => {
    try{
       const result = await BookingRepository.createBooking(data);
       return result;
     }catch(error){
       return{error}
     }
  }),
};
