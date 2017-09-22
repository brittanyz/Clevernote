import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
  ADD_TAGGING,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from '../actions/notes_actions';
import { RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebooks_actions';
import { merge } from 'lodash';

const initialState = {};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTES:
      let notes = action.notes;
      return merge ({}, notes);
    case RECEIVE_NOTE:
      let note = action.note;
      return merge ({}, state, {[note.id]: note});
    case REMOVE_NOTE:
      let newState = merge({}, state);
      delete newState[action.noteId];
      return newState;
    case ADD_TAGGING:
      newState = merge( {}, state);
      return newState;
    case RECEIVE_NOTEBOOK:
      return merge({}, state, action.notes);
    case REMOVE_NOTEBOOK:
      newState = merge( {}, state);
      for (note in newState) {
        if (newState[note].notebook_id === action.notebook.notebook.id) {
          delete newState[note];
        }
      }
      return newState;
    case RECEIVE_ERRORS:
      let errors = action.errors.responseJSON;
      return merge({}, state, { errors });
    default:
      return state;
  }
};
// have a REMOVE_NOTEBOOK action here and delete all the notes in that notebook.
