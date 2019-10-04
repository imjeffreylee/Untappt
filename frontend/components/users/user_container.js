import { connect } from "react-redux";
import { logout, fetchUser } from "../../actions/session_actions";
import userProfile from "./user";

const msp = (state, ownProps) => {
  let userId = ownProps.match.params.userId;
  let users = state.entities.users;
  return {
    user: users.userId,
    users: users,
    
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(msp, mdp)(userProfile);