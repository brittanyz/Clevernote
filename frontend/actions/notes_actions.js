import * as APIUtil from '../util/notes_api_util.js';
import { receiveErrors } from './sessions_actions';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


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
    note => dispatch(receiveNote(note)),
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
