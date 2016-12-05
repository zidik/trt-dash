import { combineReducers } from 'redux';
import robotState from './FullState/reducer';
const rootReducer = combineReducers({
  robotState
});

export default rootReducer;