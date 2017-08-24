import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/sessions_actions';
import { merge } from 'lodash';

const initialState = {
  currentUser: null,
  errors: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge ({}, state, { currentUser });
    case RECEIVE_ERRORS:
      const errors = action.errors.responseJSON;
      return merge({}, state, { errors });
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
};
