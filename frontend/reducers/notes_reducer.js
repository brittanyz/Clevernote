import { RECEIVE_NOTES, RECEIVE_NOTE, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/notes_actions';
import { merge } from 'lodash';

const initialState = {
};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTES:
      let notes = action.notes;
      return merge ({}, state, notes);
    case RECEIVE_NOTE:
      let note = action.note;
      return merge ({}, state, {[note.id]: note});
    case RECEIVE_ERRORS:
      let errors = action.errors.responseJSON;
      return merge({}, state, {[note.id]: note}, { errors });
    default:
      return initialState;
  }
};
