import { combineReducers } from "redux";

import counterReducer from "./Counter/counter.reducer.js";
import coffeeReducer from "./Coffee/coffee.reducer.js";

const rootReducer = combineReducers({
  counter: counterReducer,
  coffee: coffeeReducer,
});

export default rootReducer;
