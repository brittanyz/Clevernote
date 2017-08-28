import React from 'react';
import NotesIndexItem from './notes_index_item';
import { connect } from 'react-redux';
import { fetchNotes, editNote } from '../../actions/notes_actions';
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
    this.setState({
      notes: this.props.fetchNotes()
    });

  }

  handleClick(id) {
    return (e) => {
      this.setState({
        selectedNote: id
      });
    };
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    this.setState({selectedNote: Object.keys(nextProps.notes).reverse[0]});
  }

  render() {
    // debugger
    const notesObj = this.props.notes;
    let notes = [];
    for(let note in notesObj){
      notes.push(notesObj[note]);
    }

    notes = notes.sort((note) => Date.parse(note.updated_at));
    debugger
    notes = notes.reverse();
    // debugger
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
          notes={notes}
          note={this.props.notes[this.state.selectedNote] || notes[0] || this.props.newNote}
          submit={this.props.editNote}
          button={null}
         />
      </div>
    );
  }
}


const mapStateToProps = (state, passedProps) => {
  return {
    notes: passedProps.notes,
    selectedNote: passedProps.note,
    newNote: {title: 'Title your note', body: 'just start typing...', notebook_id: null }
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  editNote: note => dispatch(editNote(note)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotesIndex));
