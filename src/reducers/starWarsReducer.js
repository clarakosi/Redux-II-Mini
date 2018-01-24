import { FETCHING_CHARS, CHARS_RECEIVED, ERROR_FETCHING_CHARS } from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, String fetching, String fetched, null error.
  characters: [],
  fetching: false,
  fetched: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING_CHARS, CHARS_RECEIVED, ERROR_FETCHING_CHARS
    // your switch statement should handle all of these cases.
    case FETCHING_CHARS: 
      return {...state, fetching: true};
    case CHARS_RECEIVED:
      return {...state, fetching: false, fetched: true, characters: action.payload.results};
    case ERROR_FETCHING_CHARS:
      return {...state, fetching: false, fetched: false, error: action.payload};
    default:
      return state;
  }
};
