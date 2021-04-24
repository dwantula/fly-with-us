import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from 'utils/localStorage';
import { ADD_FAVOURITE_QUOTE, DELETE_FAVOURITE_QUOTE } from './actions';

const initialState = getItemFromLocalStorage('quotes') || [];

function favourtieFlightsConnectionsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITE_QUOTE: {
      const {
        departurePlace,
        returnPlace,
        price,
        quoteId,
        departureDate,
        returnDate,
        departureCarrier,
        returnCarrier,
        direct,
      } = action.payload;
      const newQuote = {
        departurePlace,
        returnPlace,
        price,
        quoteId,
        departureDate,
        returnDate,
        departureCarrier,
        returnCarrier,
        direct,
      };
      const theSamePrice = !!state.find((elem) => elem.quoteId === quoteId);
      if (!theSamePrice) {
        const newQuotes = [...state, newQuote];
        saveItemInLocalStorage('quotes', newQuotes);
        return newQuotes;
      }
      return state;
    }
    case DELETE_FAVOURITE_QUOTE: {
      const quotesWithoutDeletedQuote = state.filter(
        (elem) => elem.quoteId !== action.payload.quoteId,
      );
      saveItemInLocalStorage('quotes', quotesWithoutDeletedQuote);
      return quotesWithoutDeletedQuote;
    }
    default:
      return state;
  }
}

export default favourtieFlightsConnectionsReducer;
