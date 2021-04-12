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
    dispatch(
      travelQuotes.quotes.length
        ? { type: GET_QUOTES_FULFILLED, payload: travelQuotes }
        : {
            type: GET_QUOTES_REJECTED,
            payload: "Sorry, there aren't any flights that match your filters.",
          },
    );
  } catch (error) {
    dispatch({ type: GET_QUOTES_REJECTED, payload: error.message });
  }
};

export const RESET_TRAVEL_QUOTES = 'RESET_TRAVEL_QUOTES';

export const clearTravelQuotes = () => (dispatch) => {
  dispatch({ type: RESET_TRAVEL_QUOTES });
};
