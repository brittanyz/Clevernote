import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
    return (e) => {
      e.preventDefault();
      this.setState({
        [inputType]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  render() {
    let greeting1 = "Meet Clevernote, your second brain.";
    let greeting2 = "Capture, organize, and share notes from anywhere. " +
                    "Your best ideas are always with you and in sync.";
    let items = [<div key={1} className='greeting1'>{greeting1}</div>,
                 <div key={2} className='greeting2'>{greeting2}</div>];

    return(
      <div>
        <ReactCSSTransitionGroup className='greeting'
          transitionName='example'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Greeting;


// -        <div className='greeting'>
// -          <h1 className='greeting1'>{greeting1}</h1>
// -          <h3 className='greeting2'>{greeting2}</h3>
// -        </div>
