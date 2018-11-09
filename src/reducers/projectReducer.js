// Action imports
import { FETCH_PROJECT_SUCCESS } from '../actions/types';

// Creates and initial state to empty array
const initialState = [];

// Creates reducer to handle the users
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fills state with the users
    case FETCH_PROJECT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default projectReducer;
