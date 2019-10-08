import { connect } from "react-redux";
import { logout, fetchUser } from "../../actions/session_actions";
import { fetchBreweries } from "../../actions/brewery_actions";
import userProfile from "./user";

const msp = (state, ownProps) => {
  let userId = ownProps.match.params.userId;
  let user = state.entities.users[userId];
  return {
    user,
    users: state.entities.users
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchBreweries: () => dispatch(fetchBreweries())
  };
};

export default connect(msp, mdp)(userProfile);