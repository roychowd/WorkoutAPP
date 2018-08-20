import { loadState } from "../connectivity/localstoage";

export const loadName = () => {
  let state = loadState();
  if (state.auth.user.firstName === null || state.auth.user.lastName === null) {
    return "No Name";
  } else {
    return state.auth.user.firstName + " " + state.auth.user.lastName;
  }
};
