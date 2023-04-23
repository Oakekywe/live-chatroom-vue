import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCpHVklO4NHfjFYfEff2HMd3t0zoaE2WrM",
  authDomain: "chatroom-57af2.firebaseapp.com",
  projectId: "chatroom-57af2",
  storageBucket: "chatroom-57af2.appspot.com",
  messagingSenderId: "149274040018",
  appId: "1:149274040018:web:02c56a875cbbf0187fbf0b"
};
  
firebase.initializeApp(firebaseConfig)
const db= firebase.firestore()
const auth= firebase.auth()
const timestamp= firebase.firestore.FieldValue.serverTimestamp

export {db, timestamp, auth}

