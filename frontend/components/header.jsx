import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="signup-navbar">
        <div className="logo">
          <img className="elephant" src={window.images.logo} />
          <h1 className="Clevernote">CLEVERNOTE</h1>
        </div>
        <Link to={"/login"}>Login</Link>
      </header>
    )
  }
}

export default Header;
