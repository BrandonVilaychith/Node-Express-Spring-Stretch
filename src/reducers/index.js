import { combineReducers } from 'redux';
// Reducer imports
import projectReducer from './projectReducer';

export default combineReducers({
  projects: projectReducer
});
