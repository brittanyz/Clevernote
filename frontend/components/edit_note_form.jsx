import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, editNote } from '../actions/notes_actions';

class EditNoteForm extends React.Component {
  constructor(props) {
    super(props);
    let defaultNote = this.props.note || {title: '', body:'', notebook_id: null};
    this.state = {
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
    console.log('handling title');
  }

  handleBody(e){
    e.preventDefault();
    this.setState({
      body: e.currentTarget.value,
    });
    console.log('handling body');
    this.props.editNote(this.state);
  }

  // componentWillReceiveProps() {
  //   console.log('receive props');
  //   // if (this.props.allNotes.length > 0) {this.props.editNote(this.state);}
  // }
  // componentDidMount () {
  //   console.log('didMount');
  //   // this.props.fetchNote()
  // }

  handleSubmit(e) {
    e.preventDefault();
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
          <input
            className='title'
            type='text'
            value={defaultNote.title}
            onChange={this.handleTitle} />
          <br></br>
          <textarea
            type='text'
            className='body'
            value={defaultNote.body}
            onChange={this.handleBody} />
          <input
            className='edit-submit'
            type='submit'
            value='temporary submit' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, passedProps) => {
  return {
    notes: passedProps.notes,
    selectedNoteId: passedProps.selectedNote,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  editNote: note => dispatch(editNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNoteForm);
