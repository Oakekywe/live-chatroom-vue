import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBuCc3QV31JJd9cFfjMZZFYzXMOqLEEtG8",
  authDomain: "live-chatroom-15004.firebaseapp.com",
  projectId: "live-chatroom-15004",
  storageBucket: "live-chatroom-15004.appspot.com",
  messagingSenderId: "959747439476",
  appId: "1:959747439476:web:16380e1d7e2cd42b8cca21"
};
  
firebase.initializeApp(firebaseConfig)
const db= firebase.firestore()
const auth= firebase.auth()
const timestamp= firebase.firestore.FieldValue.serverTimestamp

export {db, timestamp, auth}

