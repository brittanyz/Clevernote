import React from 'react';
import SignUpPage from './signUpPage';
import LogInPage from './logInPage';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
// import UserFormContainer from './user_form_container';
// import GreetingContainer from './greeting_container';
import { Route } from 'react-router-dom';
import HeaderContainer from './header_container';

const Dummy = () => {
    return ( <div>words</div>);
};

const App = () => {
  return (
    <div>
      <ProtectedRoute path='/' component={Dummy}/>
      <AuthRoute path="/signup" component={SignUpPage} />
      <AuthRoute path="/login" component={LogInPage} />
    </div>
  );
};

export default App;


// <HeaderContainer />
// <GreetingContainer />
