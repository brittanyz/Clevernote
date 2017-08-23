import React from 'react';
import { login, signup } from '../actions/sessions_actions';
import { connect } from 'react-redux';

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

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input className="input" type="text"
          onMouseDown={this.mouseClick}
          value={this.state.username}
          placeholder="Username"
          onChange={this.handleChange('username')}/>
        <input className="input" type="password"
          onMouseDown={this.mouseClick}
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange('password')}/>
        <input className="login-button" type="submit" value={this.props.formType}/>
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
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActualForm);
