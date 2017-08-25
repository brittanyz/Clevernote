import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, logout, signup } from './actions/sessions_actions';
import { fetchNote, fetchNotes, deleteNote, createNote } from './actions/notes_actions';
import Root from './components/root';


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
  // window.fetchNotes = fetchNotes;
  // window.createNote = createNote;
  // window.deleteNote = deleteNote;
  window.dispatch = store.dispatch;
});
