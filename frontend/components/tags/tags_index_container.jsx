import { connect } from 'react-redux';
import { fetchTags, fetchTag } from '../../actions/tags_actions';
import { fetchNotes, editNote, createNote } from '../../actions/notes_actions';
import NotesIndex from '../notes/notes_index';

const mapStateToProps = (state, passedProps) => {
//this will change
  // debugger
  let noteIds = [];
  if (state.tags[passedProps.match.params.tagId] && state.tags[passedProps.match.params.tagId].note_ids){
    noteIds = state.tags[passedProps.match.params.tagId].note_ids;
  }
  let notes = {};
  noteIds.forEach( (id) => {
    notes[id] = (state.notes[id]);
}  );
    return {
    // tag: passedProps.tag,
    tags: state.tags,
    type: "tag",
    notes: notes,
    noteCount: Object.keys(notes).length,
    // selectedTag: passedProps.tag.id
    // selectedTag: state.tags[passedProps.match.params.tagId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTag: (id) => dispatch(fetchTag(id)),
    fetchTags: () => dispatch(fetchTags()),
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: (noteData) => dispatch(createNote(noteData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
