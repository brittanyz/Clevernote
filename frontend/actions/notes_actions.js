import * as APIUtil from '../util/notes_api_util.js';
import { receiveErrors } from './sessions_actions';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const ADD_TAGGING = 'ADD_TAGGING';
export const REMOVE_TAGGING = 'REMOVE_TAGGING';


export const receiveNote = (note) => ({
  type: RECEIVE_NOTE,
  note,
  errors: [],
});

export const receiveNotes = (notes) => ({
  type: RECEIVE_NOTES,
  notes,
  errors: [],
});

export const removeNote = ({noteId, notebookId}) => ({
  type: REMOVE_NOTE,
  noteId,
  notebookId,
  errors: [],
});

export const addTagging = ({noteId, tagId}) => {
  return {
    type: ADD_TAGGING,
    noteId,
    tagId,
    errors: [],
  }
}

export const addTagToNote = (noteId, tagId)  => dispatch => {
  return APIUtil.addTagToNote(noteId, tagId).then(
    note => dispatch(receiveNote(note)),
    errors => dispatch(receiveErrors(errors)));
};

export const removeTagFromNote = (noteId, tagId) => dispatch => {
  return APIUtil.removeTagFromNote(noteId, tagId).then(
    note => dispatch(receiveNote(note)),
  errors => dispatch(receiveErrors(errors)));
};

export const createNote = (noteData) => dispatch => (
  APIUtil.createNote(noteData).then(
    note => dispatch(receiveNote(note)),
    errors => dispatch(receiveErrors(errors)))
);

export const editNote = (noteData) => dispatch => (
  APIUtil.editNote(noteData).then(
    note => dispatch(receiveNote(note)),
    errors => dispatch(receiveErrors(errors)))
);

export const deleteNote = (noteId) => dispatch => (
  APIUtil.deleteNote(noteId).then(
    payload => dispatch(removeNote(payload)),
    errors => dispatch(receiveErrors(errors)))
);

export const fetchNote = (noteId) => dispatch => (
  APIUtil.fetchNote(noteId).then(
    note => dispatch(receiveNote(note)),
    errors => dispatch(receiveErrors(errors)))
);

export const fetchNotes = () => dispatch => (
  APIUtil.fetchNotes().then(
    notes => dispatch(receiveNotes(notes)),
    errors => dispatch(receiveErrors(errors)))
);
