import { connect } from "react-redux";
import { logout, fetchUser } from "../../actions/session_actions";
import Navbar from "./navbar"

const msp = (state, ownProps) => {
  let userId = state.session.id;
  let user = state.entities.users[userId]
  return {
    user
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(msp, mdp)(Navbar);
