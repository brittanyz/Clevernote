import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { login, signup } from '../actions/sessions_actions';
import GreetingContainer from './greeting_container';
import HeaderContainer from './header_container';
import ActualForm from './actual_form';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
  }
  //
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }
  // 
  // mouseClick() {
  //   if (this.state.username === 'Username') {
  //     this.setState({
  //       username: '',
  //       password: ''
  //     });
  //   }
  // }


  render () {

    return (
      <div>
        <div className="signup-header">
          <HeaderContainer/>
        </div>

        <div className="body-wrapper">
          <GreetingContainer/>
          <div className="divider"></div>
          <span className="signup">
          <div className="signup">
            <ActualForm formType="signup" />
          </div>
        </span>
        </div>

      </div>
    );
  }
}

export default withRouter(SignUpPage);
