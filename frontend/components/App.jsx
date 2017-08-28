import React from 'react';
import SignUpPage from './sessions/signup_page';
import LogInPage from './sessions/login_page';
import NewNotePage from './notes/new_note';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import NotesIndexContainer from './notes/notes_index_container';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './sessions/header_container';


const App = () => {
  return (
    <div>
      <Switch>
        <ProtectedRoute path='/' exact component={NotesIndexContainer}/>
        <AuthRoute path="/signup" component={SignUpPage} />
        <AuthRoute path="/login" component={LogInPage} />
        <Route path="/new" exact component={NewNotePage} />
      </Switch>
    </div>
  );
};

export default App;
