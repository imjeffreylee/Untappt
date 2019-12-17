import { connect } from "react-redux";
import { logout, fetchUser } from "../../actions/session_actions";
import { fetchCheckins } from "../../actions/checkin_actions";
import userProfile from "./user";

const msp = (state, ownProps) => {
  let userId = ownProps.match.params.userId;
  let user = state.entities.users[userId];
  let checkins = Object.values(state.entities.checkins);
  
  return {
    user,
    checkins
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchCheckins: () => dispatch(fetchCheckins()),
  };
};

export default connect(msp, mdp)(userProfile);