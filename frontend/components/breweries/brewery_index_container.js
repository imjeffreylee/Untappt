import { connect } from "react-redux";
import { fetchBreweries } from "../../actions/brewery_actions";
import { logout } from "../../actions/session_actions";
import BreweryIndex from "./brewery_index";

const msp = (state, ownProps) => {
  let breweries = Object.values(state.entities.breweries)
  return {
    breweries
  };
};

const mdp = dispatch => {
  return {
    fetchBreweries: () => dispatch(fetchBreweries()),
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(BreweryIndex);
