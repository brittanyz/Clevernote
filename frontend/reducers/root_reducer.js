import { combineReducers } from 'redux';
import sessionsReducer from './sessions_reducer';
// import noteReducer from './note_reducer';
import notesReducer from './notes_reducer';

const rootReducer = combineReducers({
  session: sessionsReducer,
  notes: notesReducer,
});

export default rootReducer;
