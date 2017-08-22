import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { login, signup } from '../actions/sessions_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit (e) {
    debugger;
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


  render () {
    let prompt, link;
    if (this.props.formType === "login") {
      prompt = "Log In";
      link = <Link to="/login">{prompt}</Link>;
    } else {
      prompt = "Sign Up";
      link = <Link to="/signup">{prompt}</Link>;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>{prompt}</h2>
          <label> Username
            <input type="text" onChange={this.handleChange('username')}/>
          </label>
          <label> Password
            <input type="password" onChange={this.handleChange('password')}/>
          </label>
            <input type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
