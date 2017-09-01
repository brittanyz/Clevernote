import { connect } from 'react-redux';
import { fetchNotes, fetchNote, editNote, addTagToNote } from '../../actions/notes_actions';
import { fetchTags } from '../../actions/tags_actions';
import NotesIndex from './notes_index';
import { values } from 'lodash';

const mapStateToProps = (state, ownProps) => {
  return {
    type: "note",
    notes: values(state.notes),
    noteCount: Object.keys(state.notes).length,
    selectedNoteId: null,
    tags: state.tags
  };
};


const mapDispatchToProps = dispatch => {
  return {
    addTagToNote: (noteId, tagId) => dispatch(addTagToNote(noteId, tagId)),
    fetchTags: () => dispatch(fetchTags()),
    fetchNote: (id) => dispatch(fetchNote(id)),
    fetchNotes: () => dispatch(fetchNotes()),
    editNote: note => dispatch(editNote(note))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
