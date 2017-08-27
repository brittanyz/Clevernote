import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, editNote, createNote } from '../actions/notes_actions';
// import NoteHeader from './note_header';
import ReactQuill from 'react-quill';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    let defaultNote = this.props.note ||
          {id: null,
          title: 'Title your note',
          body:'just start typing...',
          notebook_id: null};
    this.state = {
      id: defaultNote.id,
      title: defaultNote.title,
      body: defaultNote.body,
      notebook_id: defaultNote.note_id,
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e){
    e.preventDefault();
    this.setState({
      title: e.currentTarget.value,
    });
  }

  handleBody(e){
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    // e.preventDefault();
    this.timeoutId = setTimeout(this.handleSubmit, 1500);

    // this is new
    // let param;

    // if (typeof e.target === 'undefined') {
    //   param = {body: e};
    // }


    this.setState({
      body: e.currentTarget.value,
    });
  }

  componentWillReceiveProps(newProps) {

    this.setState({id: newProps.note.id, title: newProps.note.title, body: newProps.note.body});
  }


  handleSubmit(e) {
    // e.preventDefault();
    this.props.editNote(this.state);
  }

  render() {
    const notesObj = this.props.notes;
    let noteIds = [];
    for(let note in notesObj){
      noteIds.push(note);
    }
    let defaultNote = this.props.note || this.props.notes[noteIds[0]] || '';
    return (

        <div className='edit-note-container'>

          <form className='edit-note-form' onSubmit={this.handleSubmit}>
            <ReactQuill />
            <input
              className='title'
              type='text'
              value={this.state.title}
              onChange={this.handleTitle} />
            <br></br>
            <textarea
              type='text'
              className='edit-body'
              value={this.state.body}
              onChange={this.handleBody} />
        </form>
        </div>

    );
  }
}

const mapStateToProps = (state, passedProps) => {
  return {
    notes: passedProps.notes,
    selectedNote: passedProps.note,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  editNote: note => dispatch(editNote(note)),
  createNote: note => dispatch(createNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);


// <ReactQuill
//   className='edit-body'
//   value={this.state.body}
//   onChange={this.handleBody}
//   />
