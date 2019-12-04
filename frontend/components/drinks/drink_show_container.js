import { connect } from "react-redux";
import { fetchDrink } from "../../actions/drink_actions";
import { launchModal } from "../../actions/modal_actions";
import DrinkShow from "./drink_show";

const msp = (state, ownProps) => {
  let drinkId = ownProps.match.params.drinkId;
  let drink = state.entities.drinks[drinkId];

  let brewery;
  if (drink) {
    brewery = state.entities.breweries[drink.brewery_id];
  };
  
  return {
    drink,
    brewery
  };
};

const mdp = dispatch => {
  return {
    fetchDrink: id => dispatch(fetchDrink(id)),
    launchModal: (modal) => dispatch(launchModal(modal))
  };
};

export default connect(msp, mdp)(DrinkShow);
