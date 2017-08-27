import React from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions/notes_actions';
import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      body: '',
      notebook_id: null,
    };
  }
  render() {
    return(
      <div className='new-note'>
          <h2>here is my form</h2>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  createNote: (noteData) => dispatch(createNote(noteData)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewNote));
