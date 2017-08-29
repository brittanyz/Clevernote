import React from 'react';
import SignUpPage from './sessions/signup_page';
import LogInPage from './sessions/login_page';
import NewNotePage from './notes/new_note';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import NotesIndexContainer from './notes/notes_index_container';
import NotebooksIndexContainer from './notebooks/notebooks_index_container';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './sessions/header_container';
import NewNotebookForm from './notebooks/new_notebook_form';


const App = () => {
  return (
    <div>
      <Switch>
        <ProtectedRoute path='/' exact component={NotesIndexContainer}/>
        <AuthRoute path="/signup" component={SignUpPage} />
        <AuthRoute path="/login" component={LogInPage} />
        <Route path="/new" exact component={NewNotePage} />
        <Route path="/notebooks/new" exact component={NewNotebookForm} />
        <Route path="/notebooks/:notebookId/new" exact component={NewNotePage} />
        <Route path='/notebooks/:notebookId' component={NotebooksIndexContainer} />
      </Switch>
    </div>
  );
};

export default App;
