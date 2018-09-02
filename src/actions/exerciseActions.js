import { FETCH_EXERCISE_TABLE } from "../actions/types";
import axios from "axios";

export const grabExerciseTable = (item, history) => dispatch => {
  axios
    .get(`http://localhost:5000/exercise/category/${item.params.muscle}`, item)
    .then(res => {
      dispatch({
        type: FETCH_EXERCISE_TABLE,
        payload: res.data
      });
      history.push(`/WorkoutTable/${item.params.muscle}`);
    });
};
