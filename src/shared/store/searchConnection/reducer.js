import {
  GET_QUOTES_STARTED,
  GET_QUOTES_FULFILLED,
  GET_QUOTES_REJECTED,
} from './actions';

const initialState = {
  carriers: [],
  places: [],
  quotes: [],
  loading: false,
  error: '',
};

function travelQuotesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUOTES_STARTED: {
      return { ...state, loading: true, error: '' };
    }
    case GET_QUOTES_FULFILLED: {
      const { carriers, places, quotes } = action.payload;
      return {
        ...state,
        carriers,
        places,
        quotes,
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
export default travelQuotesReducer;
