import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
  CLEAR_NOTEBOOKS,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from '../actions/notebooks_actions';
import { REMOVE_NOTE } from '../actions/notes_actions';
import { merge } from 'lodash';


const initialState = {};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTEBOOKS:
      let notebooks = action.notebooks;
      return merge ({}, state, notebooks);
    case RECEIVE_NOTEBOOK:
      let notebook = action.notebook;
      return merge ({}, state, {[notebook.id]: notebook});
    case REMOVE_NOTEBOOK:
    debugger
      let newState = merge({}, state);
      // delete newState[action.notebook.id];
      delete newState[action.notebook.notebook.id];
      return newState;
    case CLEAR_NOTEBOOKS:
      return merge({}, {});
    case RECEIVE_ERRORS:
      let errors = action.errors.responseJSON;
      return merge({}, state, { errors });
    case REMOVE_NOTE:
      newState = merge( {}, state);
      notebook = newState[action.notebookId];
      if (!notebook || !notebook.note_ids) {
        return state;
      }
      notebook.note_ids = notebook.note_ids.filter( (id) => id !== action.noteId );
      return newState;
    default:
      return state;
  }
};
