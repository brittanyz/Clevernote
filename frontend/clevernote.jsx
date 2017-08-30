import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, logout, signup } from './actions/sessions_actions';
import { fetchNote, fetchNotes, deleteNote, createNote, editNote } from './actions/notes_actions';
import { fetchTag, fetchTags, deleteTag, createTag } from './actions/tags_actions';
import { fetchNotebooks, createNotebook, deleteNotebook } from './actions/notebooks_actions';
import Root from './components/root';
import quickSort from './components/notes/quick_sort';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
  // window.signup = signup;
  // window.login = login;
  window.logout = logout;
  // window.fetchNote = fetchNote;
  // window.editNote = editNote;
  window.fetchNotes = fetchNotes;
  // window.createNote = createNote;
  // window.deleteNote = deleteNote;
  // window.createNotebook = createNotebook;
  // window.deleteNotebook = deleteNotebook;
  // window.fetchNotebooks = fetchNotebooks;
  window.quickSort = quickSort;
  window.fetchTags = fetchTags;
  window.createTag = createTag;
  window.deleteTag = deleteTag;
  window.fetchTag = fetchTag;
  window.dispatch = store.dispatch;
});
