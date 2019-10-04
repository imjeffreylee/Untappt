import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from './session_form';
// import { Link } from 'react-router-dom';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: "Login",
    // navLink: <Link to="/signUp">Sign up</Link>
  };
}

const mdp = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
}

export default connect(msp, mdp)(SessionForm);