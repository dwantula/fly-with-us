import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlane } from '@fortawesome/free-solid-svg-icons';

import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from 'utils/localStorage';

import './styles.scss';
// import FlightOffer from 'shared/components/FlightOffer/FlightOffer';

function TrackingFlights() {
  const [quotes, setQuotes] = useState([]);
  const [qutoeDelete, setQuoteDelete] = useState('');

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

  return (
    <div>
      {quotes.map(
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
          <div key={price} className="offer">
            <div className={qutoeDelete === price ? 'offer-delete' : ''}>
              <div className="offer__departure">
                <div className="offer__carrier">
                  <p>{departureCarrier}</p>

                  <FontAwesomeIcon
                    icon={faPlane}
                    className="offer_icon-plane-depart"
                  />
                </div>
                <div className="offer__road">
                  <p>{departureDate}</p>
                  <div className="offer__road-row">
                    <p>{departurePlace}</p>
                    <div className="offer__arrow green">
                      <p>
                        ----------------
                        <i className="arrow right" />
                      </p>
                    </div>
                    <p>{returnPlace}</p>
                  </div>
                </div>
              </div>
              <div className="offer__return">
                <div className="offer__carrier">
                  <p>{returnCarrier}</p>
                  <FontAwesomeIcon
                    icon={faPlane}
                    className="offer_icon-plane-return"
                  />
                </div>
                <div>
                  <div className="offer__road">
                    <p>{returnDate}</p>
                    <div className="offer__road-row">
                      <p>{returnPlace}</p>
                      <div className="offer__arrow">
                        <p>
                          ----------------
                          <i className="arrow right" />
                        </p>
                      </div>
                      <p>{departurePlace}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offer__price">
              <p>Price: {price}zł</p>
            </div>
            <div className="offers__select">
              <p>Direct:{direct === false ? ' No' : ' Yes'}</p>
              <div className="offers__icon-watch">
                <span>Delete:</span>
                <button
                  onClick={() => deleteOffer(price)}
                  type="button"
                  className="offer__button-watch"
                >
                  <FontAwesomeIcon
                    className="offers__icon-trash"
                    icon={faTrash}
                  />
                </button>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
export default TrackingFlights;
