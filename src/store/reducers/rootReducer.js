import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import projectReducer from "./projectReducer";
import authReducer from "./authReducer";

const rooReducer = combineReducers({
  project: projectReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rooReducer;
