import { connect } from "react-redux";
import { fetchDrink } from "../../actions/drink_actions";
import DrinkShow from "./drink_show";

const msp = (state, ownProps) => {
  // debugger
  let drinkId = ownProps.match.params.drinkId;
  let drink = state.entities.drinks[drinkId];
  // debugger
  let brewery;
  if (drink) {
    brewery = state.entities.breweries[drink.brewery_id];
  }
  // debugger
  return {
    drink,
    brewery
  };
};

const mdp = dispatch => {
  return {
    fetchDrink: id => dispatch(fetchDrink(id))
  };
};

export default connect(msp, mdp)(DrinkShow);
