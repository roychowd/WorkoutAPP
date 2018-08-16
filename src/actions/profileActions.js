import axios from "axios";
import { UPDATE_DAILY_CAL } from "./types";

export const updateDailyCal = (user, history) => dispatch => {
  axios.post("http://localhost:5000/profile/:id/overall_calories", user);
};
