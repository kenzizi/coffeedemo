import { GET_COFFEE_MENU } from "./coffee.types";
import axios from "axios";

export const getCoffeeMenu = () => async (dispatch) => {
  const baseURL = "http://localhost:8000";
  try {
    const res = await axios.get(`${baseURL}/menu-list`);

    dispatch({
      type: GET_COFFEE_MENU,
      payload: res.data,
    });
  } catch (err) {
    console.log("getCoffeeMenu err", err);
  }
};
