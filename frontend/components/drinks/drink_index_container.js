import { connect } from 'react-redux';
import { fetchDrinks } from "../../actions/drink_actions";
import DrinkIndex from "./drink_index"

const msp = (state, ownProps) => {
  let drinks = Object.values(state.entities.drinks)
  return {
    drinks,
    breweries: state.entities.breweries
  };
};

const mdp = dispatch => {
  return {
    fetchDrinks: () => dispatch(fetchDrinks())
  };
};

export default connect(msp, mdp)(DrinkIndex);