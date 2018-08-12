// file required to set the authorization jwt token as a http header!
import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
