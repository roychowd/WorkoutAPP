// index.js reducer files
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import exerciseReducer from "./exerciseReducer";
export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  exercise: exerciseReducer
});
