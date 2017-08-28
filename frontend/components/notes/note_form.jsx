import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, editNote, createNote } from '../../actions/notes_actions';
import { withRouter, Redirect } from 'react-router-dom';
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
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.props.location.pathname === '/') {
      this.timeoutId = setTimeout(this.handleSubmit, 2000);
    }
    e.preventDefault();

    this.setState({
      title: e.currentTarget.value,
    });
  }

  handleBody(e){

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.props.location.pathname === '/') {
      this.timeoutId = setTimeout(this.handleSubmit, 2000);
    }

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
    if (newProps.note !== undefined) {
      this.setState({id: newProps.note.id || null, title: newProps.note.title, body: newProps.note.body});
    }
  }

  handleSubmit(e) {
    // debugger
    if (typeof e !== 'undefined') {
      e.preventDefault();
    }
    // needed to manually set the notebook id since notebooks havent been createed yet.
    // maybe later state will already be set to the current notebook id??
    this.setState({notebook_id: 4}, () => this.props.submit(this.state).then(() => {
      if (this.props.location.pathname === '/new') {
        this.props.history.push('/');
      }
    }));
  }

  render() {
    let submit;
    const notesObj = this.props.notes;
    let noteIds = [];
    for(let note in notesObj){
      noteIds.push(note);
    }


    return (
      <div className='edit-note-container'>
        <form className='edit-note-form' onSubmit={this.handleSubmit}>
          <ReactQuill />
          <input
            className='title'
            type='text'
            value={this.state.title}
            placeholder="Title your note"
            onChange={this.handleTitle} />
          <br></br>
          <textarea
            placeholder="just start typing....."
            type='text'
            className='edit-body'
            onChange={this.handleBody}
            value={this.state.body}/>
          {this.props.button}
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state, passedProps) => {
//   return {
//     notes: passedProps.notes,
//     selectedNote: passedProps.note,
//     newNote : {title: 'Title your note', body: 'just start typing...', notebook_id: null }
//   };
// };
//
// const mapDispatchToProps = dispatch => ({
//   fetchNotes: () => dispatch(fetchNotes()),
//   editNote: note => dispatch(editNote(note)),
//   createNote: note => dispatch(createNote(note)),
// });

export default withRouter(NoteForm);


// <ReactQuill
//   className='edit-body'
//   value={this.state.body}
//   onChange={this.handleBody}
//   />
