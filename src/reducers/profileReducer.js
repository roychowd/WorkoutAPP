import { UPDATE_DAILY_CAL } from "../actions/types";

const initialState = {
  calories: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DAILY_CAL:
      return {
        ...state,
        calories: action.payload
      };
    default:
      return state;
  }
}
