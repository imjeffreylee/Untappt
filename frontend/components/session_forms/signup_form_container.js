import { connect } from "react-redux";
import React from "react";
import { signUp, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = state => {
  return {
    errors: state.errors.session,
    formType: "Sign up"
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(SessionForm);
