import * as DrinkAPIUtil from "../util/drink_api_util";

export const RECEIVE_DRINK = "RECEIVE_DRINK";
export const RECEIVE_DRINKS = "RECEIVE_DRINKS";

export const receiveDrink = drink => {
  return {
    type: RECEIVE_DRINK,
    drink
  };
};

export const receiveDrinks = drinks => {
  // debugger
  return {
    type: RECEIVE_DRINKS,
    drinks
  };
};

export const fetchDrink = id => dispatch => {
  return DrinkAPIUtil.fetchDrink(id).then(drink =>
    dispatch(receiveDrink(drink))
  );
};

export const fetchDrinks = () => dispatch => {
  // debugger
  return DrinkAPIUtil.fetchDrinks().then(drinks =>
    dispatch(receiveDrinks(drinks))
  );
};
