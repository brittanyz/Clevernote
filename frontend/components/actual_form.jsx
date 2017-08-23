import React from 'react';
import { login, signup, clearErrors } from '../actions/sessions_actions';
import { connect } from 'react-redux';
import Errors from './errors';

class ActualForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(inputKey){
    return (e) => {
      this.setState({
        [inputKey]: e.currentTarget.value
      });
    };
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {

    return (
      <form className ="form" onSubmit={this.handleSubmit}>
        <input className="input" type="text"
          value={this.state.username}
          placeholder="Username"
          onChange={this.handleChange('username')}/>
        <input className="input" type="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange('password')}/>
        <input className="login-button" type="submit" value={this.props.formType}/>
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
    clearErrors: () => dispatch(clearErrors()),
    formType,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActualForm);
