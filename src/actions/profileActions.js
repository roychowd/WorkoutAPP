import axios from "axios";
import { UPDATE_DAILY_CAL } from "./types";

export const updateDailyCal = (user, history) => dispatch => {
  axios
    .put(`http://localhost:5000/profile/${user.params.id}/dailyCal`, user)
    .then(response => {
      console.log(response.data);
      dispatch({
        action: UPDATE_DAILY_CAL,
        payload: response.data
      });
      history.push("/");
    });
};
