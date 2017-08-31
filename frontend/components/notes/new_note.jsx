import React from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions/notes_actions';
import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';

class NewNote extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const button = <button className='new-note-submit'>submit</button>;
    return (
      <div className="new-note">
          <NoteForm
            note={this.props.newNote}
            notebookId={this.props.notebookId}
            submit={this.props.createNote}
            button={button}
            />
      </div>
    );
  }
}

//
const mapStateToProps = (state, ownProps) => {
  return {
  newNote: {title: '', body: ''},
  notebookId: state.session.currentUser.defaultNotebookId,
};
};

const mapDispatchToProps = dispatch => ({
  createNote: (noteData) => dispatch(createNote(noteData)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewNote));
