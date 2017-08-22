import { combineReducers } from 'redux';
import sessionsReducer from './sessions_reducer';

const rootReducer = combineReducers({
  session: sessionsReducer
});

export default rootReducer;
