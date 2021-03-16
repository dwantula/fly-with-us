import { fetchPlacesList } from 'shared/services/places';

export const GET_PLACES_STARTED = 'GET_PLACES_STARTED';
export const GET_PLACES_FULFILLED = 'GET_PLACES_FULFILLED';
export const GET_PLACES_REJECTED = 'GET_PLACES_REJECTED';

export const getPlacesAction = (country) => async (dispatch) => {
  dispatch({ type: GET_PLACES_STARTED });
  try {
    const placesList = await fetchPlacesList(country);
    dispatch({ type: GET_PLACES_FULFILLED, payload: placesList });
  } catch (error) {
    dispatch({ type: GET_PLACES_REJECTED, payload: error.message });
  }
};
