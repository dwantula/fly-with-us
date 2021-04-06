import { fetchTravelQuotes } from 'shared/services/searchConnection';

export const GET_QUOTES_STARTED = 'GET_QUOTES_STARTED';
export const GET_QUOTES_FULFILLED = 'GET_QUOTES_FULFILLED';
export const GET_QUOTES_REJECTED = 'GET_QUOTES_REJECTED';

export const getTravelQuotesAction = (
  originplace,
  destinationplace,
  outboundpartialdate,
  inboundpartialdate,
) => async (dispatch) => {
  dispatch({ type: GET_QUOTES_STARTED });
  try {
    const travelQuotes = await fetchTravelQuotes(
      originplace,
      destinationplace,
      outboundpartialdate,
      inboundpartialdate,
    );
    dispatch({ type: GET_QUOTES_FULFILLED, payload: travelQuotes });
    console.log(travelQuotes);
  } catch (error) {
    dispatch({ type: GET_QUOTES_REJECTED, payload: error.message });
  }
};
