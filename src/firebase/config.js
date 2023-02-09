import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBTd_oDOpQKnL6925Yy9TbA3HHX2AfKgww",
    authDomain: "live-chatroom-vue.firebaseapp.com",
    projectId: "live-chatroom-vue",
    storageBucket: "live-chatroom-vue.appspot.com",
    messagingSenderId: "136254321083",
    appId: "1:136254321083:web:4da33e15e3043d0012d49e"
  };
  
firebase.initializeApp(firebaseConfig)
const db= firebase.firestore()
const timestamp= firebase.firestore.FieldValue.serverTimestamp

export {db, timestamp}

