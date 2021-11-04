import { GET_COFFEE_MENU } from "./coffee.types.js";

let INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_COFFEE_MENU:
      return state.concat(payload);

    default:
      return state;
  }
};

export default reducer;
