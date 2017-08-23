import React from 'react';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../util/route_util.jsx';
// import UserFormContainer from './user_form_container';
// import GreetingContainer from './greeting_container';
import { Route } from 'react-router-dom';
import HeaderContainer from './header_container';

const App = () => {
  return (
    <div>
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
    </div>
  );
};

export default App;


// <HeaderContainer />
// <GreetingContainer />
