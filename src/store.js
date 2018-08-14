import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import { createBrowserHistory } from "history";
// import { connectRouter, routerMiddleware } from "connected-react-router";

const initalState = {};

// export const history = createBrowserHistory();

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initalState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
