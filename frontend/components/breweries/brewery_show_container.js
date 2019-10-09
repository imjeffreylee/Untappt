import { connect } from "react-redux";
import { fetchBrewery } from "../../actions/brewery_actions";
import BreweryShow from "./brewery_show";

const msp = (state, ownProps) => {
  let breweryId = ownProps.match.params.breweryId;
  let brewery = state.entities.breweries[breweryId];
  return {
    brewery
  }
}

const mdp = dispatch => {
  return {
    fetchBrewery: id => dispatch(fetchBrewery(id))
  }
}

export default connect(msp, mdp)(BreweryShow);