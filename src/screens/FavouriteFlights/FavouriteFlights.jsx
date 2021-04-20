import React, { useEffect, useState } from 'react';

import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from 'utils/localStorage';
import Offer from 'shared/components/Offer/Offer';
import DeleteButton from 'shared/components/DeleteButton/DeleteButton';

import './styles.scss';

function FavouriteFlights() {
  const [quotes, setQuotes] = useState([]);
  const [qutoeDelete, setQuoteDelete] = useState(0);

  useEffect(() => {
    const quotes = getItemFromLocalStorage('quotes');
    setQuotes(quotes);
  }, []);

  function deleteOffer(price) {
    setQuoteDelete(price);
    const quoteDelete = quotes.filter((elem) => elem.price !== price);
    const quotesWithoutDeletedQuote = quoteDelete.map((elem) => elem);
    setQuotes(quotesWithoutDeletedQuote);
    saveItemInLocalStorage('quotes', quotesWithoutDeletedQuote);
  }
  console.log(quotes);
  return (
    <div className="tracking-flights">
      {quotes.length ? (
        quotes.map(
          ({
            departurePlace,
            returnPlace,
            price,
            departureDate,
            returnDate,
            departureCarrier,
            returnCarrier,
            direct,
          }) => (
            <div
              className={qutoeDelete === price ? 'offer-delete' : ''}
              key={price}
            >
              <div className="tracking-flight__offer">
                <Offer
                  departurePlace={departurePlace}
                  returnPlace={returnPlace}
                  price={price}
                  departureDate={departureDate}
                  returnDate={returnDate}
                  departureCarrier={departureCarrier}
                  returnCarrier={returnCarrier}
                  direct={direct}
                />
                <DeleteButton deleteOffer={deleteOffer} price={price} />
              </div>
            </div>
          ),
        )
      ) : (
        <div className="tracking-flights__info">
          <h3>You dont have favorite connections</h3>
        </div>
      )}
    </div>
  );
}
export default FavouriteFlights;
