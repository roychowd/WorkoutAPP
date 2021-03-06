import { SET_CURRENT_USER, GET_ERRORS, REGISTER_USER } from "../actions/types";

// a helper function used
const isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

const initalState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initalState, action) {
  console.log(action.type);
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case REGISTER_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
