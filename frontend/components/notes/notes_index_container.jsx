import { connect } from 'react-redux';
import { fetchNotes, fetchNote, editNote } from '../../actions/notes_actions';
import { fetchTags } from '../../actions/tags_actions';
import NotesIndex from './notes_index';

const mapStateToProps = (state, ownProps) => {
  return {
    type: "note",
    notes: state.notes,
    noteCount: Object.keys(state.notes).length,
    selectedNoteId: null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTags: () => dispatch(fetchTags()),
    fetchNote: (id) => dispatch(fetchNote(id)),
    fetchNotes: () => dispatch(fetchNotes()),
    editNote: note => dispatch(editNote(note))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
