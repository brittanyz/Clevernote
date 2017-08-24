// import { RECEIVE_NOTE, DELETE_NOTE, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/notes_actions';
// import { merge } from 'lodash';
//
// const initialState = {
//   title: '',
//   body: '',
//   notebook_id: null,
// };
//
// export default (state = initialState, action) => {
//   Object.freeze(state);
//   switch(action.type) {
//     case RECEIVE_NOTE:
//       let note = action.note;
//       let errors = action.errors;
//       return merge ({}, state, {[note.id]: note}, { errors });
//     case DELETE_NOTE:
//       note = action.note;
//       errors = action.errors;
//       return merge ({}, state, {[note.id]: note}, { errors });
//     case RECEIVE_ERRORS:
//       note = action.note;
//       errors = action.errors.responseJSON;
//       return merge({}, state, {[note.id]: note}, { errors });
//     case CLEAR_ERRORS:
//       note = action.note;
//       errors = [];
//       return merge({}, state, { note }, errors);
//     default:
//       return initialState;
//   }
// };
