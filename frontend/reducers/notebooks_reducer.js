import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from '../actions/notebooks_actions';
import { merge } from 'lodash';


const initialState = {};

export default (state = initialState, action) => {
  Object.freeze(state);
  // debugger
  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      let notebooks = action.notebooks;
      return merge ({}, state, notebooks);
    case RECEIVE_NOTEBOOK:
      debugger
      let notebook = action.notebook;
      return merge ({}, state, {[notebook.id]: notebook});
    case REMOVE_NOTEBOOK:
      let newState = merge({}, state);
      delete newState[action.notebook.id];
      return newState;
    case RECEIVE_ERRORS:
      let errors = action.errors.responseJSON;
      return merge({}, state, { errors });
    default:
      return state;
  }
};
