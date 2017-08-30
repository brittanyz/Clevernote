import { combineReducers } from 'redux';
import sessionsReducer from './sessions_reducer';
import notesReducer from './notes_reducer';
import notebookReducer from './notebooks_reducer';
import tagsReducer from './tags_reducer';

const rootReducer = combineReducers({
  session: sessionsReducer,
  notes: notesReducer,
  notebooks: notebookReducer,
  tags: tagsReducer,
});

export default rootReducer;
