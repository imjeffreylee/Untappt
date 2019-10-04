import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_USER = "LOGOUT_USER";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const signUp = user => dispatch =>
  SessionAPIUtil.signUp(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );

export const login = user => dispatch =>
  SessionAPIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );

export const logout = () => dispatch =>
  SessionAPIUtil.logout().then(() => dispatch(logoutUser()));

export const fetchUser = id => dispatch =>
  SessionAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));

export const fetchUsers = () => dispatch =>
  SessionAPIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)));

