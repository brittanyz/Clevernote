import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/sessions_actions';
import { withRouter } from 'react-router';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
