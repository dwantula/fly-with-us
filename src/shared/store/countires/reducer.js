import {
  GET_COUNTRIES_STARTED,
  GET_COUNTRIES_FULFILLED,
  GET_COUNTRIES_REJECTED,
} from './actions';

const initialState = {
  countries: [],
  loading: false,
  error: '',
};

function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES_STARTED: {
      return { ...state, loading: true };
    }
    case GET_COUNTRIES_FULFILLED: {
      return { ...state, countries: action.payload, loading: false };
    }
    case GET_COUNTRIES_REJECTED: {
      return { ...state, error: action.payload, loading: false };
    }
    default:
      return state;
  }
}
export default countriesReducer;
