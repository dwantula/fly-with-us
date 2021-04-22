import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteFavouriteOffer } from 'shared/store/favouriteConnections/actions';
import Offer from 'shared/components/Offer/Offer';
import DeleteButton from 'shared/components/DeleteButton/DeleteButton';

import './styles.scss';

function FavouriteFlights() {
  const [qutoeDelete, setQuoteDelete] = useState('');

  const dispatch = useDispatch();

  const quotes = useSelector((state) => state.favouriteConnections);

  function deleteOffer(quoteId) {
    setQuoteDelete(quoteId);
    dispatch(deleteFavouriteOffer(quoteId));
  }

  return (
    <div className="tracking-flights">
      {quotes.length ? (
        quotes.map(
          ({
            departurePlace,
            returnPlace,
            price,
            quoteId,
            departureDate,
            returnDate,
            departureCarrier,
            returnCarrier,
            direct,
          }) => (
            <div
              className={qutoeDelete === quoteId ? 'offer-delete' : ''}
              key={quoteId}
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
                <DeleteButton deleteOffer={deleteOffer} quoteId={quoteId} />
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
