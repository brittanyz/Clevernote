import React from 'react';
import NotesIndexItem from './notes_index_item';
import EditNoteForm from './edit_note_form';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.noteCount = 0;
  }

  componentWillMount() {
    // debugger
    let notes = this.props.fetchNotes();
    this.noteCount = Object.keys(notes).length;
    console.log(this.noteCount);
    return notes;
  }

  render() {
    const notesObj = this.props.notes;
    const notes = [];
    for(let note in notesObj){
      notes.push(notesObj[note]);
    }
    return(
      <div className='notes-wrapper'>
        <ul className='user-notes'>
          <li className='fixed-first-note'>
            NOTES
          </li>
          {notes.map ( (note, idx) => <NotesIndexItem key={idx} note={note} /> )}
        </ul>
        <EditNoteForm />
      </div>
    );
  }
}

export default NotesIndex;
