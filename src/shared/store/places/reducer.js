import {
  GET_DESTINATION_PLACES_STARTED,
  GET_DESTINATION_PLACES_FULFILLED,
  RESET_DESTINATION_PLACES,
  GET_DESTINATION_PLACES_REJECTED,
  GET_ORIGIN_PLACES_STARTED,
  GET_ORIGIN_PLACES_FULFILLED,
  RESET_ORIGIN_PLACES,
  GET_ORIGIN_PLACES_REJECTED,
} from './actions';

const initialState = {
  originPlaces: [],
  destinationPlaces: [],
  isLoadingOriginPlaces: false,
  isloadingDestinationPlaces: false,
  error: '',
};

function placesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DESTINATION_PLACES_STARTED: {
      return { ...state, isLoadingDestinationPlaces: true };
    }
    case GET_DESTINATION_PLACES_FULFILLED: {
      return {
        ...state,
        destinationPlaces: action.payload,
        isLoadingDestinationPlaces: false,
      };
    }
    case RESET_DESTINATION_PLACES: {
      return {
        ...state,
        destinationPlaces: [],
      };
    }
    case GET_DESTINATION_PLACES_REJECTED: {
      return {
        ...state,
        error: action.payload,
        isLoadingDestinationPlaces: false,
      };
    }
    case GET_ORIGIN_PLACES_STARTED: {
      return { ...state, isLoadingOriginPlaces: true };
    }
    case GET_ORIGIN_PLACES_FULFILLED: {
      return {
        ...state,
        originPlaces: action.payload,
        isLoadingOriginPlaces: false,
      };
    }
    case RESET_ORIGIN_PLACES: {
      return {
        ...state,
        originPlaces: [],
      };
    }
    case GET_ORIGIN_PLACES_REJECTED: {
      return { ...state, error: action.payload, isLoadingOriginPlaces: false };
    }
    default:
      return state;
  }
}
export default placesReducer;
