import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
  RECEIVE_ERRORS,

  CLEAR_ERRORS } from '../actions/notes_actions';
import { RECEIVE_NOTEBOOK } from '../actions/notebooks_actions';
import { merge } from 'lodash';

const initialState = {};

export default (state = initialState, action) => {
  debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTES:
      let notes = action.notes;
      return merge ({}, state, notes);
    case RECEIVE_NOTE:
      let note = action.note;
      return merge ({}, state, {[note.id]: note});
    case REMOVE_NOTE:
      let newState = merge({}, state);
      delete newState[action.noteId.id];
      return newState;
    case RECEIVE_NOTEBOOK:
      return merge({}, state, action.notes);
    case RECEIVE_ERRORS:
      let errors = action.errors.responseJSON;
      return merge({}, state, { errors });
    default:
      return state;
  }
};
