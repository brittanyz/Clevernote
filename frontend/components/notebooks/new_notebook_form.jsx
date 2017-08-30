import React from 'react';
import { connect } from 'react-redux';
import { createNotebook } from '../../actions/notebooks_actions';
import { withRouter } from 'react-router-dom';

class NewNotebookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author_id: props.newNotebook.author_id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNotebook(this.state)
      .then( ({notebook}) => {
        this.props.history.push(`/notebooks/${notebook.id}`);
      });
  }

  handleTitle(e) {
    this.setState({
      title: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div className='new-notebook'>
        <form className='new-notebook-form' onSubmit={this.handleSubmit}>
          <img className="nb-elephant" src={window.images.logo} />
          <input
            className='nb-title'
            type='text'
            placeholder="Title your notebook..."
            onChange={this.handleTitle}/>
          <input className='nb-submit' type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  newNotebook: {title: '', author_id: state.session.currentUser.id},
  // notebookId: state.session.currentUser.notebookId,
  };
};

const mapDispatchToProps = dispatch => ({
  createNotebook: (notebookData) => dispatch(createNotebook(notebookData)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewNotebookForm));






// value={this.state.title}
