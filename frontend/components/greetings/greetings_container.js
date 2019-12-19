import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greetings';

const msp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

export default connect(msp)(Greeting);