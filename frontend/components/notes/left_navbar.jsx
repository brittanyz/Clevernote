import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/sessions_actions';
import { withRouter } from 'react-router-dom';

class LeftNavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  //
  // handleNew() {
  //   this.setState(Object.assign( {}, this.state));
  // }

  render() {
    return (
      <div className='left-navbar'>
        <Link to={"/new"} className='new' onClick={this.handleToggle}>+</Link>
        <button onClick={this.handleClick} className='logout'>Logout</button>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


export default withRouter(connect(null, mapDispatchToProps)(LeftNavBar));