import { connect } from 'react-redux';
import {fetchNotes} from '../actions/notes_actions';
import NotesIndex from './notes_index';

const mapStateToProps = (state) => {
  return { notes: state.notes };
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
