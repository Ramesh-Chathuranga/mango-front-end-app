import firebase from "../core/firebase";
import axios from "axios";

export default class Repository {
    collection = '';
    db= "";

    constructor(collection){
      this.collection = collection;
      this.db = firebase.firestore();
    }

    signUpWithEmailPassword =async ({email,password})=>{
       try{
        const data=await firebase.auth().createUserWithEmailAndPassword(email, password);
        return data;
       }catch(error){
           return {error};
       }
    };

    signInWithEmailAndPassword = async ({email,password})=>{
        try{
         const data=await firebase.auth().signInWithEmailAndPassword(email, password);
         return data;
        }catch(error){
            return {error};
        }
     };

     signOut = async ()=>{
         try{
          const data = firebase.auth().signOut();
          debugger;
          return;
         }catch(error){
             return {error};
         }
     }

    saveData = async({uid,object})=>{
        try{
           const data= await this.db.collection(this.collection).doc(uid).set(object);
           return {uid};
        }catch(error){
            return {error}
        }
        
    }
 
    data = (method, url, data = null) => {
        return  axios({
           method: method,
           url: url,
           data: data,
         })
          .then(response => response)
          .catch (e => {
           console.warn(JSON.stringify(e));
           console.log(e && e.data || e);
           return null;
        });
     }
   
     getData =  (url, data) => {
       return  this.data('get', url, data);
     }
   
     postData = (url, data) => {
       return this.data('post',url, data);
     }
    
     putData = (url, data) => {
        return this.data('put',url, data);
      }
}