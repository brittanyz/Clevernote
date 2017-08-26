import React from 'react';
import NotesIndexItem from './notes_index_item';
import EditNoteForm from './edit_note_form';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selectedNote: null
    };
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  handleClick(id) {
    return (e) => {
      this.setState({
        selectedNote: id
      });
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({selectedNote: Object.keys(nextProps.notes)[0]});
  }

  render() {
    // debugger
    const notesObj = this.props.notes;
    let notes = [];
    for(let note in notesObj){
      notes.push(notesObj[note]);
    }
    notes = notes.sort((note) => note.id );
    return(
      <div className='notes-wrapper'>
        <ul className='user-notes'>
            <li className='fixed-first-note'>
              <p>NOTES</p>
              <p className="note-count">{this.props.noteCount}</p>
            </li>
            {notes.map ( (note) => <button
                                        onClick={this.handleClick(note.id)}
                                        key={note.id}
                                        value={note.id}>
                                            <NotesIndexItem
                                            note={note} />
                                        </button> )}
        </ul>
        <EditNoteForm
          notes={this.props.notes}
          note={this.props.notes[this.state.selectedNote]}
         />
      </div>
    );
  }
}

export default NotesIndex;
