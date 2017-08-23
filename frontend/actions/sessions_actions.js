import * as APIUtil from '../util/session_api_util';
import * as APIUsersUtil from '../util/users_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
  errors: [],
});

export const receiveErrors = (errors) =>({
  type: RECEIVE_ERRORS,
  currentUser: null,
  errors: errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});


export const signup = (user) => dispatch => (
  APIUsersUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors)))
);

export const login = (user) => dispatch => (
  APIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(
    user => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors)))
);
