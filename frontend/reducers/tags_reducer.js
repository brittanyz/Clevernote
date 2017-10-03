import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from '../actions/tags_actions';
import { merge } from 'lodash';

const initialState = {};

export default (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TAGS:
      let tags = action.tags;
      return merge ({}, tags);
    case RECEIVE_TAG:
      let tag = action.tag;
      return merge ({}, state, {[tag.id]: tag});
    case REMOVE_TAG:
      let newState = merge({}, state);
      delete newState[action.tag.tag.id];
      return newState;
    case RECEIVE_ERRORS:
      let errors = action.errors.responseJSON;
      return merge({}, state, { errors });
    default:
      return state;
  }
};
