import { connect } from 'react-redux';
import { fetchNotebooks, fetchNotebook } from '../../actions/notebooks_actions';
import { fetchNotes, editNote, createNote } from '../../actions/notes_actions';
import NotesIndex from '../notes/notes_index';

const mapStateToProps = (state, passedProps) => {
//this will change
  let noteIds = [];
  if (state.notebooks[passedProps.match.params.notebookId] && state.notebooks[passedProps.match.params.notebookId].note_ids){
    noteIds = state.notebooks[passedProps.match.params.notebookId].note_ids;
  }
  let notes = {};
  noteIds.forEach( (id) => {
    notes[id] = (state.notes[id]);
}  );
    return {
    type: "notebook",
    notes: notes,
    noteCount: Object.keys(notes).length,
    selectedNoteId: null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotebook: (id) => dispatch(fetchNotebook(id)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    editNote: note => dispatch(editNote(note)),
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: (noteData) => dispatch(createNote(noteData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
