import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_USER = "LOGOUT_USER";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signUp = user => dispatch =>
  APIUtil.signUp(user).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveSessionErrors(error.responseJSON))
  );

export const login = user => dispatch =>
  APIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveSessionErrors(error.responseJSON))
  );

export const logout = () => dispatch =>
  APIUtil.logout().then((user) => dispatch(logoutUser()));
