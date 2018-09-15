import { loadState } from "../connectivity/localstoage";

export const loadMuscle = () => {
  let state = loadState();
  // if (state.exercise.muscle === null) {
  //   return "No Muscle Selected";
  // } else {
  return state.exercise.muscle;
};

export const fetchTableData = muscle => {
  console.log("IM A SDF", muscle);
};
