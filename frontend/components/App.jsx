import React from 'react';
import SignUpPage from './signup_page';
import LogInPage from './login_page';
import NewNote from './new_note';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import NotesIndexContainer from './notes_index_container';
import { Route } from 'react-router-dom';
import HeaderContainer from './header_container';


const App = () => {
  return (
    <div>
      <ProtectedRoute exact path='/' component={NotesIndexContainer}/>
      <AuthRoute path="/signup" component={SignUpPage} />
      <AuthRoute path="/login" component={LogInPage} />
      <ProtectedRoute path="/new" exact component={NewNote} />
    </div>
  );
};

export default App;
