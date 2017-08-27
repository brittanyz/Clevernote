import React from 'react';
import SignUpPage from './signUpPage';
import LogInPage from './logInPage';
import NewNotePage from './new_note_page';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import NotesIndexContainer from './notes_index_container';
import { Route } from 'react-router-dom';
import HeaderContainer from './header_container';


const App = () => {
  return (
    <div>
      <ProtectedRoute path='/' component={NotesIndexContainer}/>
      <AuthRoute path="/signup" component={SignUpPage} />
      <AuthRoute path="/login" component={LogInPage} />
      <AuthRoute path="/new" component={NewNotePage} />
      <Route path="/signup" component={SignUpPage} />
    </div>
  );
};

export default App;
