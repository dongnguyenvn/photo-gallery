import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/storage'

var config = {
    apiKey: "AIzaSyDyE554Zf4AdwNSR2l6Z7APG3jcYv3GSRA",
    authDomain: "photo-gallery-1a89e.firebaseapp.com",
    projectId: "photo-gallery-1a89e",
    storageBucket: "photo-gallery-1a89e.appspot.com",
    messagingSenderId: "242953066204",
    appId: "1:242953066204:web:4b927042bc72f43ba7c619",
    measurementId: "G-QTW63D595B"
  };

firebase.initializeApp(config);

export const firestore = firebase.firestore()
export const storage = firebase.storage()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export default firebase