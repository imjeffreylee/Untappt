import * as DrinkAPIUtil from "../util/drink_api_util";

export const RECEIVE_DRINK = "RECEIVE_DRINK";
export const RECEIVE_DRINKS = "RECEIVE_DRINKS";

// action creators
export const receiveDrink = payload => {
  return {
    type: RECEIVE_DRINK,
    drink: payload.drink,
    breweries: payload.breweries,
    checkins: payload.checkins
  };
};

export const receiveDrinks = payload => {
  return {
    type: RECEIVE_DRINKS,
    drinks: payload.drinks,
    breweries: payload.breweries
  };
};

// thunk actions
export const fetchDrink = id => dispatch => {
  return DrinkAPIUtil.fetchDrink(id).then(payload =>
    dispatch(receiveDrink(payload))
  );
};

export const fetchDrinks = () => dispatch => {
  return DrinkAPIUtil.fetchDrinks().then(payload =>
    dispatch(receiveDrinks(payload))
  );
};

export const createDrink = drink => dispatch => {
  return DrinkAPIUtil.createDrink(drink)
  // .then(payload => 
  //   dispatch(receiveDrink(payload))
  // );
};