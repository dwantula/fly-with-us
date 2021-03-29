import {
  GET_QUOTES_STARTED,
  GET_QUOTES_FULFILLED,
  GET_QUOTES_REJECTED,
} from './actions';

const initialState = {
  carriers: [],
  flightList: [],
  places: [],
  loading: false,
  error: '',
};

function travelQoutesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUOTES_STARTED: {
      return { ...state, loading: true, error: '' };
    }
    case GET_QUOTES_FULFILLED: {
      const { carriers, places, flightList } = action.payload;
      return {
        ...state,
        carriers,
        places,
        flightList,
        loading: false,
      };
    }
    case GET_QUOTES_REJECTED: {
      return { ...state, error: action.payload, loading: false };
    }
    default:
      return state;
  }
}
export default travelQoutesReducer;
