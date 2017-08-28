import React from 'react';
import NotesIndexItem from './notes_index_item';
import NewNote from './new_note';
import NoteHeader from './note_header';
import NoteForm from './note_form';
import LeftNavBar from './left_navbar';
import { withRouter } from 'react-router-dom';

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

  componentWillMount () {
    // debugger
  }

  handleClick(id) {
    return (e) => {
      this.setState({
        selectedNote: id
      });
    };
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.location.pathname === '/new') {
    //   this.setState({})
    // } else {
      this.setState({selectedNote: Object.keys(nextProps.notes)[0]});
    // }
  }

  render() {
    const notesObj = this.props.notes;
    let notes = [];
    for(let note in notesObj){
      notes.push(notesObj[note]);
    }
    notes = notes.sort((note) => note.id );

    // const form = (this.props.location.pathname === '/') ? 'editNote' : 'createNote';
    return(
      <div className='notes-wrapper'>
        <LeftNavBar/>
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
        <NoteForm
          notes={this.props.notes}
          note={this.props.notes[this.state.selectedNote]}
         />
      </div>
    );
  }
}

export default withRouter(NotesIndex);
