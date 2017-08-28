import React from 'react';
import { login, signup, clearErrors } from '../../actions/sessions_actions';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Errors from './errors';

class ActualForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      demoUser: {
        username: 'demoUser',
        password: 'demoUser'
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
      let user = Object.assign({}, this.state);
      this.props.processForm(user);
  }

  handleChange(inputKey){
    return (e) => {
      this.setState({
        [inputKey]: e.currentTarget.value
      });
    };
  }

  handleDemoLogin(e){
    e.preventDefault();
    let user = Object.assign({}, this.state.demoUser);
    this.props.login(user);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    let label, button;
    label = (this.props.formType === 'signup') ? "Sign up for free" : "Sign In";
    button = (this.props.formType === 'signup') ? "Sign Up" : "Sign In";
    return (
      <form className ="form" onSubmit={this.handleSubmit}>
        <label className="logging-in">{label}</label>
        <input className="input" type="text"
          value={this.state.username}
          placeholder="Username"
          onChange={this.handleChange('username')}/>
        <input className="input" type="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange('password')}/>
        <input className="login-button" type="submit" value={button}/>
        <input className="login-button" type="submit" value='Demo Login' onClick={this.handleDemoLogin}/>
        <Errors />
      </form>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.errors,
  };
};


const mapDispatchToProps = (dispatch, {formType}) => {
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActualForm);
