import { combineReducers } from "redux";

import coffeeReducer from "./Coffee/coffee.reducer.js";
import panierReducer from "./panier/panier.reducer.js";

const rootReducer = combineReducers({
  coffee: coffeeReducer,
  panier: panierReducer,
});

export default rootReducer;
