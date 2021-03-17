import {
  GET_DESTINATION_PLACES_STARTED,
  GET_DESTINATION_PLACES_FULFILLED,
  GET_DESTINATION_PLACES_REJECTED,
  GET_ORIGIN_PLACES_STARTED,
  GET_ORIGIN_PLACES_FULFILLED,
  GET_ORIGIN_PLACES_REJECTED,
} from './actions';

const initialState = {
  originPlaces: [],
  destinationPlaces: [],
  loading: false,
  error: '',
};

function placesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DESTINATION_PLACES_STARTED: {
      return { ...state, loading: true };
    }
    case GET_DESTINATION_PLACES_FULFILLED: {
      return { ...state, destinationPlaces: action.payload, loading: false };
    }
    case GET_DESTINATION_PLACES_REJECTED: {
      return { ...state, error: action.payload, loading: false };
    }
    case GET_ORIGIN_PLACES_STARTED: {
      return { ...state, loading: true };
    }
    case GET_ORIGIN_PLACES_FULFILLED: {
      return { ...state, originPlaces: action.payload, loading: false };
    }
    case GET_ORIGIN_PLACES_REJECTED: {
      return { ...state, error: action.payload, loading: false };
    }
    default:
      return state;
  }
}
export default placesReducer;
