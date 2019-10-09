import { connect } from "react-redux";
import { fetchDrink } from "../../actions/drink_actions";
import DrinkShow from "./drink_show";

const msp = (state, ownProps) => {
  let drinkId = ownProps.match.params.drinkId;
  let drink = state.entities.drinks[drinkId];
  return {
    drink
  };
};

const mdp = dispatch => {
  return {
    fetchDrink: id => dispatch(fetchDrink(id))
  };
};

export default connect(msp, mdp)(DrinkShow);
