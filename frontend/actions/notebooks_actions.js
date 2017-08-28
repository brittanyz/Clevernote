// no editing notebooks!!!!!!!!!!!!!

import * as APIUtil from '../util/notebooks_api_util';
import { receiveErrors } from './sessions_actions';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const DELETE_NOTEBOOK = 'DELETE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveNotebook = (notebook) => ({
  type: RECEIVE_NOTEBOOK,
  notebook,
  errors: [],
});

export const receiveNotebooks = (notebooks) => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks,
  errors: [],
});

export const removeNotebook = (notebook) => ({
  type: REMOVE_NOTEBOOK,
  notebook,
  errors: [],
});

export const createNotebook = (notebookData) => dispatch => (
  APIUtil.createNotebook(notebookData).then(
    notebook => dispatch(receiveNotebook(notebook)),
    errors => dispatch(receiveErrors(errors)))
);

export const deleteNotebook = (notebookId) => dispatch => (
  APIUtil.deleteNotebook(notebookId).then(
    notebookId => dispatch(removeNotebook(notebookId)),
    errors => dispatch(receiveErrors(errors)))
);

export const fetchNotebook = (notebookId) => dispatch => (
  APIUtil.fetchNotebook(notebookId).then(
    notebook => dispatch(receiveNotebook(notebook)),
    errors => dispatch(receiveErrors(errors)))
);

export const fetchNotebooks = () => dispatch => (
  APIUtil.fetchNotebooks().then(
    notebooks => dispatch(receiveNotebooks(notebooks)),
    errors => dispatch(receiveErrors(errors)))
);
