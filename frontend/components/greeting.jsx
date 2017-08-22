import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(inputType) {
    // debugger
    return (e) => {
      e.preventDefault();
      this.setState({
        [inputType]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  render() {
    let greeting1 = "Meet Clevernote, your second brain";
    let greeting2 = "Capture, organize, and share notes from anywhere. " +
                    "Your bext ideas are always with you and in sync.";
    return(
      <div>
        <div className='greeting'>
          <h1 className='greeting1'>{greeting1}</h1>
          <h3 className='greeting2'>{greeting2}</h3>
        </div>


     </div>
    );
  }
}

export default Greeting;


// <div className='login-signup'>
//   <form onSubmit={this.handleSubmit}>
//     <button>Demo Login</button>
//     <input type="text" value={this.state.username}
//       onChange={this.handleChange('username')}></input>
//     <input type="password" value={this.state.password}
//       onChange={this.handleChange('password')}></input>
//     <input type="submit"></input>
//   </form>
// </div>
