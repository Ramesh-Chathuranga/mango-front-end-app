import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJWnokaZtAnhfIAe-o-r4Nz_tSiCGc9Jk",
  authDomain: "mango-hotel-reservation-834a5.firebaseapp.com",
  databaseURL: "https://mango-hotel-reservation-834a5.firebaseio.com",
  projectId: "mango-hotel-reservation-834a5",
  storageBucket: "mango-hotel-reservation-834a5.appspot.com",
  messagingSenderId: "144302813835",
  appId: "1:144302813835:web:186061c0d1b08f8bbf5a8e",
  measurementId: "G-4EN3WLEJD6"
};

 firebase.initializeApp(firebaseConfig);

 export default firebase;


