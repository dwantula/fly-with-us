export const ADD_FAVOURITE_QUOTE = 'ADD_FAVOURITE_QUOTE';
export const DELETE_FAVOURITE_QUOTE = 'DELETE_FAVOURITE_QUOTE';

export const addFavouriteOffer = (
  departurePlace,
  returnPlace,
  price,
  quoteId,
  departureDate,
  returnDate,
  departureCarrier,
  returnCarrier,
  direct,
) => ({
  type: ADD_FAVOURITE_QUOTE,
  payload: {
    departurePlace,
    returnPlace,
    price,
    quoteId,
    departureDate,
    returnDate,
    departureCarrier,
    returnCarrier,
    direct,
  },
});

export const deleteFavouriteOffer = (quoteId) => ({
  type: DELETE_FAVOURITE_QUOTE,
  payload: { quoteId },
});
