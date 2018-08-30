import { FETCH_EXERCISE_TABLE } from "../actions/types";

const initalState = {
  muscle: ""
};

export default function(state = initalState, action) {
  console.log(action.type);
  switch (action.type) {
    case FETCH_EXERCISE_TABLE:
      return {
        ...state,
        muscle: action.payload,
      };
    default:
      return state;
  }
}
