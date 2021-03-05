import { getItemFromLocalStorage } from 'utils/localStorage';
import { FETCH_COUNTRIES } from './actions';

const initialState = getItemFromLocalStorage('countries') || [];

function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES: {
      const countries = state;
      console.log(state);
      return countries;
    }
    default:
      return state;
  }
}

export default countriesReducer;
