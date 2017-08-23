import React from 'react';
import { connect } from 'react-redux';

const Errors = ({ errors }) => {
  errors = errors ? errors : [];

  return (
    <ul className="errors">
      { errors.map( (error, idx) => <li className="error" key="idx">{ error }</li> ) }
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors,
  };
};

export default connect(mapStateToProps, null)(Errors);
