import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

import projectReducer from "./projectReducer";
import authReducer from "./authReducer";

const rooReducer = combineReducers({
  project: projectReducer,
  auth: authReducer,
  firestore: firestoreReducer
});

export default rooReducer;
