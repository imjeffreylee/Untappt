import { connect } from "react-redux";
import { fetchBreweries } from "../../actions/brewery_actions";
import BreweryIndex from "./brewery_index";

const msp = (state, ownProps) => {
  // debugger
  let breweries = Object.values(state.entities.breweries)
  // debugger
  return {
    breweries
  };
};

const mdp = dispatch => {
  return {
    fetchBreweries: () => dispatch(fetchBreweries())
  };
};

export default connect(msp, mdp)(BreweryIndex);
