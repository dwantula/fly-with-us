import { fetchCountriesList } from 'shared/services/countries';

export const GET_COUNTRIES_STARTED = 'GET_COUNTRIES_STARTED';
export const GET_COUNTRIES_FULFILLED = 'GET_COUNTRIES_FULFILLED';
export const GET_COUNTRIES_REJECTED = 'GET_COUNTRIES_REJECTED';

export const getCountriesAction = () => async (dispatch) => {
  dispatch({ type: GET_COUNTRIES_STARTED });
  try {
    const countriesList = await fetchCountriesList();
    dispatch({ type: GET_COUNTRIES_FULFILLED, payload: countriesList });
  } catch (error) {
    dispatch({ type: GET_COUNTRIES_REJECTED, payload: error.message });
  }
};
