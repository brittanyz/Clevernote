import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/sessions_actions';
import { merge } from 'lodash';

const initialState = {
  currentUser: null,
  errors: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      let errors = action.errors;
      return merge ({}, state, { currentUser }, { errors });
    case RECEIVE_ERRORS:
      currentUser = action.currentUser;
      errors = action.errors.responseJSON;
      return merge({}, state, { currentUser }, { errors });
    default:
      return state;
  }
};
