import React from 'react';
import SessionFormContainer from './session_form_container';
import GreetingContainer from './greeting_container';

const App = () => {
  return (
    <div>
      <header> <h1>Clevernote</h1> </header>
      <GreetingContainer />
      <SessionFormContainer />
    </div>
  )
};

export default App;
