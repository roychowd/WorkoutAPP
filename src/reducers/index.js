// index.js reducer files
import { combineReducers } from "redux";
import authReducer from "./authReducer";
export default combineReducers({
  auth: authReducer
});
