import React from 'react';
import SignUpPage from './signUpPage';
import LogInPage from './logInPage';
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
    </div>
  );
};

export default App;
