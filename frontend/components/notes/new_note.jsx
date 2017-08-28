import React from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions/notes_actions';
import { withRouter } from 'react-router-dom';
import NoteForm from './note_form';

const NewNotePage = () => {

  return(
    <div className="new-note">
      <NoteForm />
    </div>
  );
};

export default NewNotePage;

//
// const mapStateToProps = (state) => ({
//   newNote : {title: 'Title your note', body: 'just start typing...', notebook_id: null }
// });
//
// const mapDispatchToProps = dispatch => ({
//   createNote: (noteData) => dispatch(createNote(noteData)),
// });

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewNote));
