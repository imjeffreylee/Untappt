import { connect } from "react-redux";
import { fetchBrewery } from "../../actions/brewery_actions";
import { fetchCheckins } from "../../actions/checkin_actions";
import { fetchDrinks } from "../../actions/drink_actions";
import BreweryShow from "./brewery_show";

const msp = (state, ownProps) => {
  let breweryId = ownProps.match.params.breweryId;
  let brewery = state.entities.breweries[breweryId];
  let drinks = Object.values(state.entities.drinks);
  let checkins = Object.values(state.entities.checkins);
  
  return {
    brewery,
    drinks,
    checkins
  }
}

const mdp = dispatch => {
  return {
    fetchBrewery: id => dispatch(fetchBrewery(id)),
    fetchCheckins: () => dispatch(fetchCheckins()),
    fetchDrinks: () => dispatch(fetchDrinks()),
  };
}

export default connect(msp, mdp)(BreweryShow);