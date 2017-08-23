import React from 'react';
import ActualForm from './actual_form';

const LogInPage = () => {
  return (
    <div className="login-page">
      <div className="login-header" >
        <img className="ele" src={window.images.logo} />
        <div className='logging-in'>Sign In</div>
      </div>
      <div className="login">
        <ActualForm formType="login" />
      </div>
    </div>
  );
};

export default LogInPage;
