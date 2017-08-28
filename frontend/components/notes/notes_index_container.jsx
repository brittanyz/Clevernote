import { connect } from 'react-redux';
import { fetchNotes, fetchNote } from '../../actions/notes_actions';
import NotesIndex from './notes_index';

const mapStateToProps = (state) => {

  return {
    notes: state.notes,
    noteCount: Object.keys(state.notes).length,
    selectedNoteId: null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNote: (id) => dispatch(fetchNote(id)),
    fetchNotes: () => dispatch(fetchNotes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
