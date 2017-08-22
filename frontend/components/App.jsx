import React from 'react';
import SessionFormContainer from './session_form_container';
// import UserFormContainer from './user_form_container';
// import GreetingContainer from './greeting_container';
import { Route } from 'react-router-dom';
import HeaderContainer from './header_container';

const App = () => {
  return (
    <div>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;


// <HeaderContainer />
// <GreetingContainer />
