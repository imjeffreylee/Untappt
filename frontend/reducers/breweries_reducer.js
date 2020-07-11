import { RECEIVE_BREWERY, RECEIVE_BREWERIES } from "../actions/brewery_actions";
import { RECEIVE_DRINKS, RECEIVE_DRINK } from "../actions/drink_actions"
import merge from "lodash/merge";

const BreweriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BREWERY:
      return merge({}, state, {
        [action.brewery.id]: action.brewery
      });
    
    case RECEIVE_BREWERIES:
      return action.breweries;

    case RECEIVE_DRINKS:
      return action.breweries;

    case RECEIVE_DRINK:
      return action.breweries;

    default:
      return state;
  }
}

export default BreweriesReducer;