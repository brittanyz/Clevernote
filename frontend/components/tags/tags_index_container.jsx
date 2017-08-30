import { connect } from 'react-redux';
import { fetchTags, fetchTag } from '../../actions/tags_actions';
import { fetchNotes, editNote, createNote } from '../../actions/notes_actions';
import NotesIndex from '../notes/notes_index';

const mapStateToProps = (state, passedProps) => {
//this will change
// 
  let tagIds = [];
  if (state.tags[passedProps.match.params.tagId] && state.tags[passedProps.match.params.tagId].note_ids){
    noteIds = state.tags[passedProps.match.params.notebookId].note_ids;
  }
  let tags = {};
  tagIds.forEach( (id) => {
    tags[id] = (state.tags[id]);
}  );
    return {
    type: "tag",
    notes: tags,
    noteCount: Object.keys(tags).length,
    selectedNoteId: null,
    selectedNote: state.tags[passedProps.match.params.noteId]
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
