import {
  GET_PLACES_STARTED,
  GET_PLACES_FULFILLED,
  GET_PLACES_REJECTED,
} from './actions';

const initialState = {
  places: [],
  loading: false,
  error: '',
};

function placesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLACES_STARTED: {
      return { ...state, loading: true };
    }
    case GET_PLACES_FULFILLED: {
      return { ...state, places: action.payload, loading: false };
    }
    case GET_PLACES_REJECTED: {
      return { ...state, error: action.payload, loading: false };
    }
    default:
      return state;
  }
}
export default placesReducer;
