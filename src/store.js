import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import { createBrowserHistory } from "history";
// import { connectRouter, routerMiddleware } from "connected-react-router";}
import { loadState, saveState } from "../src/connectivity/localstoage";
import throttle from "lodash/throttle";

const persistedState = loadState();

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(
  throttle(() => {
    saveState({
      auth: store.getState().auth,
      profile: store.getState().profile
    });
  }, 1000)
);
export default store;
