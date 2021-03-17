import { fetchPlacesList } from 'shared/services/places';

export const GET_DESTINATION_PLACES_STARTED = 'GET_DESTINATION_PLACES_STARTED';
export const GET_DESTINATION_PLACES_FULFILLED =
  'GET_DESTINATION_PLACES_FULFILLED';
export const GET_DESTINATION_PLACES_REJECTED =
  'GET_DESTINATION_PLACES_REJECTED';

export const getDestinationPlaceAction = (param) => async (dispatch) => {
  dispatch({ type: GET_DESTINATION_PLACES_STARTED });
  try {
    const placesList = await fetchPlacesList(param);
    dispatch({ type: GET_DESTINATION_PLACES_FULFILLED, payload: placesList });
  } catch (error) {
    dispatch({ type: GET_DESTINATION_PLACES_REJECTED, payload: error.message });
  }
};

export const GET_ORIGIN_PLACES_STARTED = 'GET_ORIGIN_PLACES_STARTED';
export const GET_ORIGIN_PLACES_FULFILLED = 'GET_ORIGIN_PLACES_FULFILLED';
export const GET_ORIGIN_PLACES_REJECTED = 'GET_ORIGIN_PLACES_REJECTED';

export const getOriginPlaceAction = (param) => async (dispatch) => {
  dispatch({ type: GET_ORIGIN_PLACES_STARTED });
  try {
    const placesList = await fetchPlacesList(param);
    dispatch({ type: GET_ORIGIN_PLACES_FULFILLED, payload: placesList });
  } catch (error) {
    dispatch({ type: GET_ORIGIN_PLACES_REJECTED, payload: error.message });
  }
};
