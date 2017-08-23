import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h1>Clevernote</h1>
        <Link to={"/login"}>Log in</Link>
        <Link to={"/signup"}>Log out</Link>
      </header>
    )
  }
}

export default Header;
