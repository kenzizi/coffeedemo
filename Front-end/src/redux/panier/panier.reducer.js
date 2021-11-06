import { ADD_TO_PANIER } from "./panier.types";

let INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_TO_PANIER:
      return [...state, payload];
    default:
      return state;
  }
};

export default reducer;
