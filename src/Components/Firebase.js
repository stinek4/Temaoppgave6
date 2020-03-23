import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyCFTBAsfy_ElPB3x9IrXiWeAoOxdhxOLrQ",
    authDomain: "temaoppgave6.firebaseapp.com",
    databaseURL: "https://temaoppgave6.firebaseio.com",
    projectId: "temaoppgave6",
    storageBucket: "temaoppgave6.appspot.com",
    messagingSenderId: "287549742895",
    appId: "1:287549742895:web:11b3bb8201d77d253a8bda"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore()

export default firebase