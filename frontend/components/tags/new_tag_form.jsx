import React from 'react';
import { connect } from 'react-redux';
import { createTag } from '../../actions/tags_actions';
import { withRouter } from 'react-router-dom';

class NewTagForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tag_name: '',
      author_id: props.newTag.author,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTagName = this.handleTagName.bind(this);
  }

  // maybe have another modal for the tags show? then there would be no route...
  handleSubmit(e) {
    e.preventDefault();
    this.props.createTag(this.state)
      .then( ({tag}) => {
        //or just open the show modal???
        // this.props.history.push(`tags/${tag.id}`);
        this.props.history.push('/');
      });
  }

  handleTagName(e) {
    this.setState({
      tag_name: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div className='new-tag'>
        <form className='new-tag-form' onSubmit={this.handleSubmit}>
          <img className="tag-elephant" src={window.images.logo} />
          <input
            className='tag-title'
            type='text'
            placeholder="Title your tag..."
            onChange={this.handleTagName}/>
          <input className='tag-submit' type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  newTag: {tag_name: '', author_id: state.session.currentUser.id},
  // notebookId: state.session.currentUser.notebookId,
  };
};

const mapDispatchToProps = dispatch => ({
  createTag: (tagData) => dispatch(createTag(tagData)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewTagForm));
