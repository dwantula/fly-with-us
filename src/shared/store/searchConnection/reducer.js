import {
  GET_QUOTES_STARTED,
  GET_QUOTES_FULFILLED,
  GET_QUOTES_REJECTED,
} from './actions';

const initialState = {
  carriersId: [],
  carriersName: [],
  placesName: [],
  quotesMinPrice: [],
  loading: false,
  error: '',
};

function travelQuotesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUOTES_STARTED: {
      return { ...state, loading: true, error: '' };
    }
    case GET_QUOTES_FULFILLED: {
      const {
        carriersId,
        carriersName,
        placesName,
        quotesMinPrice,
      } = action.payload;
      return {
        ...state,
        carriersId,
        placesName,
        quotesMinPrice,
        carriersName,
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
