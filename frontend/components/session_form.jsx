import React from 'react';
import { withRouter } from 'react-router-dom';
import { login, signup } from '../actions/sessions_actions';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import HeaderContainer from './header_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
    };
  }
  //
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit (e) {
    // debugger;
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

//
//   render () {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <h2>Sign up</h2>
//           <label> Username
//             <input type="text" onChange={this.handleChange('username')}/>
//           </label>
//           <label> Password
//             <input type="password" onChange={this.handleChange('password')}/>
//           </label>
//             <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// }
//
// export default withRouter(SessionForm);


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
        <p>{home}</p>
        <p>{header}</p>
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
