import { ADD_TO_PANIER } from "./panier.types";

export const addToPanier = (Panier) => async (dispatch) => {
  dispatch({
    type: ADD_TO_PANIER,
    payload: Panier,
  });
};
