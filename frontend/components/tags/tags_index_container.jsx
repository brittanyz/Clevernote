import { connect } from 'react-redux';
import { fetchTags, fetchTag } from '../../actions/tags_actions';
import { fetchNotes, editNote, createNote, addTagToNote } from '../../actions/notes_actions';
import NotesIndex from '../notes/notes_index';

const mapStateToProps = (state, passedProps) => {

  let noteIds = [];
  if (state.tags[passedProps.match.params.tagId] && state.tags[passedProps.match.params.tagId].note_ids){
    noteIds = state.tags[passedProps.match.params.tagId].note_ids;
  }
  let notes = [];
  noteIds.forEach( (id) => {
    notes.push(state.notes[id]);
}  );
    return {
    // tag: passedProps.tag,
    tags: state.tags,
    type: "tag",
    notes: notes,
    noteCount: notes.length,
    // selectedTag: passedProps.tag.id
    selectedTag: state.tags[passedProps.match.params.tagId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editNote: note => dispatch(editNote(note)),
    addTagToNote: (noteId, tagId) => dispatch(addTagToNote(noteId, tagId)),
    fetchTag: (id) => dispatch(fetchTag(id)),
    fetchTags: () => dispatch(fetchTags()),
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: (noteData) => dispatch(createNote(noteData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
