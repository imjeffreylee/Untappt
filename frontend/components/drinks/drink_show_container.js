import { connect } from "react-redux";
import { fetchDrink } from "../../actions/drink_actions";
import { fetchCheckins } from "../../actions/checkin_actions"
import { launchModal } from "../../actions/modal_actions";
import { fetchUser } from "../../actions/session_actions"
import DrinkShow from "./drink_show";

const msp = (state, ownProps) => {
  debugger
  let drinkId = ownProps.match.params.drinkId;
  let drink = state.entities.drinks[drinkId];
  let userId = state.session.id;

  let brewery;
  if (drink) {
    brewery = state.entities.breweries[drink.brewery_id];
  };

  let checkins;
  if (drink) {
    checkins = Object.values(state.entities.checkins);
  }
  
  return {
    drink,
    brewery,
    checkins,
    userId,
    user: state.entities.users[userId]
  };
};

const mdp = dispatch => {
  return {
    fetchDrink: id => dispatch(fetchDrink(id)),
    fetchCheckins: () => dispatch(fetchCheckins()),
    launchModal: modal => dispatch(launchModal(modal)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(msp, mdp)(DrinkShow);
