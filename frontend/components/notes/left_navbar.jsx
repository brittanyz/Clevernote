import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/sessions_actions';
import { withRouter } from 'react-router-dom';
import { clearNotebooks } from '../../actions/notebooks_actions';

class LeftNavBar extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   defaultNotebookId: this.props.defaultNote.notebook_id
    // };
    this.handleClick = this.handleClick.bind(this);
    this.handleNew = this.handleNew.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then(
      () => this.props.history.push('/signup')
    );
    this.props.clearNotebooks();
  }

  handleNew(e){
    e.preventDefault();

    this.setState({
      selectedNotebookId: this.props.match.params.notebookId
    });
  }

  render() {
    let link;
    if (!this.props.match.params.notebookId) {
      link = '/new';
    } else {
      link = `${this.props.match.params.notebookId}/new`;
    }
    return (
      <div className='left-navbar'>
        <Link to={link}
          className='new'>+</Link>
        <Link to='/'
          className='all-notes'>notes</Link>
        <button onClick={this.props.openModal('notebookModalOpen')} className='notebooks'>nb</button>
        <button onClick={this.props.openModal('tagModalOpen')} className='tags'>tags</button>
        <button onClick={this.handleClick} className='logout'>⏏</button>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearNotebooks: () => dispatch(clearNotebooks()),
});

// onClick={this.handleNew}

export default withRouter(connect(null, mapDispatchToProps)(LeftNavBar));
