import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { login, signup } from '../actions/sessions_actions';
import GreetingContainer from './greeting_container';
import HeaderContainer from './header_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mouseClick = this.mouseClick.bind(this);

    this.state = {
      username: "Username",
      password: "Password",
    };
  }
  //
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
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

  mouseClick() {
    if (this.state.username === 'Username') {
      this.setState({
        username: '',
        password: ''
      });
    }
  }


  render () {
    let prompt, link, home, header;
    if (this.props.formType === "login") {
      home = '';
      header = '';
      prompt = "Log In";
      link = <Link to="/login">{prompt}</Link>;
    } else {
      home = <HeaderContainer />
      header = <GreetingContainer />
      prompt = "Sign Up";
      link = <Link to="/signup">{prompt}</Link>;
    }

    return (
      <div>
        <div className="signup-header">
        {home}
        {header}
        </div>
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            <input className="input" type="text"
              onMouseDown={this.mouseClick}
              value={this.state.username}
              onChange={this.handleChange('username')}/>
            <input className="input" type="password"
              onMouseDown={this.mouseClick}
              value={this.state.password}
              onChange={this.handleChange('password')}/>
            <input className="login-button" type="submit" value={prompt}/>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
