import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, editNote, createNote } from '../../actions/notes_actions';
import { withRouter } from 'react-router-dom';
import NewNote from './new_note';
import ReactQuill from 'react-quill';

class NoteForm extends React.Component {

  constructor(props) {
    super(props);
    let defaultNote = this.props.note || this.props.newNote;
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
    // if (newProps.location.pathname === '/new') {
    //   this.setState({id: null, title: "Title", body: "start typing"});
    // } else
    if (newProps.note !== undefined) {
      this.setState({id: newProps.note.id || null, title: newProps.note.title, body: newProps.note.body});
    }
  }


  handleSubmit(e) {
    // e.preventDefault();
    if (this.props.location.pathname === '/new') {
      this.setState({notebook_id: 4});
      this.props.createNote(this.state);
    } else {
      this.props.editNote(this.state);
    }
  }

  render() {
    const notesObj = this.props.notes;
    let noteIds = [];
    for(let note in notesObj){
      noteIds.push(note);
    }
    // if (this.props.location.pathname === '/') {
    //   let defaultNote = this.props.note || this.props.notes[noteIds[0]] || '';
    // } else if (this.props.location.pathname === '/new') {
    //   // debugger
    //   let defaultNote = this.props.newNote;
    // }

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
    newNote : {title: 'Title your note', body: 'just start typing...', notebook_id: null }
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  editNote: note => dispatch(editNote(note)),
  createNote: note => dispatch(createNote(note)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteForm));


// <ReactQuill
//   className='edit-body'
//   value={this.state.body}
//   onChange={this.handleBody}
//   />
