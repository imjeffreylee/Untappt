import { connect } from "react-redux";
import React from "react";
import { signUp } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";

const msp = state => {
  let errors = state.errors;
  return {
    errors: errors.session,
    formType: "Sign up",
    navLink: <Link to="/login">Log in</Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signUp(user))
  };
};

export default connect(
  msp,
  mdp
)(SessionForm);
