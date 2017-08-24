import React from 'react';
import NotesIndexItem from './notes_index_item';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.props.fetchNotes = this.props.fetchNotes.bind(this);
  }

  componentWillMount() {
    // debugger
    return this.props.fetchNotes();
  }

  render() {
    debugger
    const notesObj = this.props.notes;
    const notes = [];
    for(let note in notesObj){
      notes.push(notesObj[note]);
    }
    debugger;
    return(
      <div>
        <ul>
          {notes.map ( (note, idx) => <NotesIndexItem key={idx} note={note} /> )}
        </ul>
      </div>
    );
  }
}

export default NotesIndex;
