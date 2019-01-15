import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import authReducer from "./authReducer";

const rooReducer = combineReducers({
  project: projectReducer,
  auth: authReducer
});

export default rooReducer;
