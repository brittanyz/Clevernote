import React from 'react';
import NotesIndexItem from './notes_index_item';
import NewNote from './new_note';
import NoteHeader from './note_header';
import NoteForm from './note_form';
import LeftNavBar from './left_navbar';
import { withRouter } from 'react-router-dom';
import quickSort from './quick_sort';
import NotebooksModal from '../notebooks/notebooks_modal';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    let notebook = this.props.type === "notebook" ? this.props.selectedNotebook : null;

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selectedNotebook: notebook,
      selectedNote: null,
      modalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.)
  //   this.props.fetchNotes();
  // }
  //
  // componentWillMount () {
  //   // debugger
  //   if (this.props.selectedNotebook) {
  //     this.setState({
  //       notes: this.props.selectedNotebook.notes
  //     });
  //   } else {
  //     this.setState({
  //       notes: this.props.fetchNotes(),
  //     });
  //   }
  // }

  componentDidMount () {
    if (this.props.type === "notebook") {
      this.props.fetchNotebook(this.props.match.params.notebookId);
    } else {
      this.props.fetchNotes().then( () => {
        this.setState({selectedNote: Object.keys(this.props.notes).reverse[0]});
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.type === "notebook") {
      if (this.props.match.params.notebookId !== nextProps.match.params.notebookId) {
        this.props.fetchNotebook(nextProps.match.params.notebookId);
      }
    }
  }

  handleClick(id) {
    return (e) => {
      this.setState({
        selectedNote: id
      });
    };
  }

  openModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   // this.setState({selectedNotebookId: nextProps.selectedNotebook.id});
  //   this.setState({selectedNote: Object.keys(nextProps.notes).reverse[0]});
  // }

  render() {
    let notebookHeader;
    if (this.props.type === 'notebook' && this.props.selectedNotebook) {
      notebookHeader = <li className='fixed-first-note-w-nb'>
                        <p>{this.props.selectedNotebook.title}</p>
                        <p className="note-count">{this.props.noteCount} notes</p>
                      </li>;
    } else {
      notebookHeader = <li className='fixed-first-note'>
                        <p>NOTES</p>
                        <p className="note-count">{this.props.noteCount} notes</p>
                      </li>;
    }

    const notesObj = this.props.notes;
    let notes = [];
    for(let note in notesObj){
      notes.push(notesObj[note]);
    }

    // notes = notes.sort((note) => Date.parse(note.updated_at));
    notes = quickSort(notes);
    notes = notes.reverse();
    return(
      <div className='notes-wrapper'>
        <NotebooksModal modalOpen={this.state.modalOpen} closeModal={this.closeModal}/>
        <LeftNavBar openModal={this.openModal}/>
        <ul className='user-notes'>
            {notebookHeader}
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
          note={this.props.notes[this.state.selectedNote] || notes[0] || {title: 'Title your note', body: 'just start typing...', notebook_id: null }}
          submit={this.props.editNote}
          button={null}
         />
      </div>
    );
  }
}


export default withRouter(NotesIndex);
// export default NotesIndex;
