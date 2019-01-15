import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//Initialize Firebase
//copied from firebase
var config = {
  apiKey: "AIzaSyATOZRZBTtTIB2_p4gasd7eS6ZzltPNr3U",
  authDomain: "cabecaplan.firebaseapp.com",
  databaseURL: "https://cabecaplan.firebaseio.com",
  projectId: "cabecaplan",
  storageBucket: "cabecaplan.appspot.com",
  messagingSenderId: "207373942564"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
