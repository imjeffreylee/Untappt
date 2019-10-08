import { RECEIVE_DRINK, RECEIVE_DRINKS } from "../actions/drink_actions";
import merge from "lodash/merge";

const DrinksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DRINK:
      return merge({}, state, {
        [action.drink.id]: action.drink
      });

    case RECEIVE_DRINKS:
      // debugger
      return action.drinks;

    default:
      return state;
  }
};

export default DrinksReducer;