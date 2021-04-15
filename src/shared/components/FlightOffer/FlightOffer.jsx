import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from 'utils/localStorage';

import './styles.scss';
import Offer from '../Offer/Offer';
import FavouriteButton from '../FavouriteButton/FavouriteButton';

function FlightOffer({
  departurePlace,
  returnPlace,
  price,
  departureDate,
  returnDate,
  departureCarrier,
  returnCarrier,
  direct,
}) {
  const [active, setActive] = useState(false);
  function addToFavourite() {
    setActive(!active);
    const quotes = getItemFromLocalStorage('quotes') || [];
    const quote = {
      departurePlace,
      returnPlace,
      price,
      departureDate,
      returnDate,
      departureCarrier,
      returnCarrier,
      direct,
    };
    const theSamePrice = !!quotes.find((elem) => elem.price === price);
    if (theSamePrice === false) {
      const newQuote = [...quotes, quote];
      saveItemInLocalStorage('quotes', newQuote);
    }
  }

  return (
    <div className="offer">
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
      <FavouriteButton
        className="offer__icon"
        addFavouriteButton={addToFavourite}
        active={active}
      />
    </div>
  );
}

FlightOffer.propTypes = {
  departurePlace: PropTypes.string.isRequired,
  returnPlace: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  departureDate: PropTypes.string.isRequired,
  direct: PropTypes.bool.isRequired,
  returnDate: PropTypes.string.isRequired,
  departureCarrier: PropTypes.string.isRequired,
  returnCarrier: PropTypes.string.isRequired,
};

export default FlightOffer;
