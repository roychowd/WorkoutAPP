import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../setAuthToken";
import jwt_decode from "jwt-decode";

export const loginUser = (user, history) => dispatch => {
  axios
    .post("http://localhost:5000/auth/getToken", user)
    .then(res => {
      console.log(res.data);
      const token = res.data;
      //set auth token to local storage and set it as a http header
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      // decode the token to grab information about the user
      const decoded = jwt_decode(token);
      //dispatch it to the reducer
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
      history.push("/Dashboard");
    })
    .catch(err => {
      // may need to change this. will go back to it later
      alert("INVALID CREDENTIALS");
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: "ERROR" // change to response.
      // });
    });
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  // delete the http header!
  setAuthToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
  history.push("/");
};
