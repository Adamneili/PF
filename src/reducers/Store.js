import { combineReducers, createStore } from "redux";
import cart_reducer from "./cart_reducer";
import courses_reducer from "./courses_reducer";
import sidebar_reducer from "./sidebar_reducer";
const store = createStore(
  combineReducers({ cart_reducer, courses_reducer, sidebar_reducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
