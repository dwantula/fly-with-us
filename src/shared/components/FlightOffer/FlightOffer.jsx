import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { addFavouriteOffer } from 'shared/store/favouriteConnections/actions';
import Offer from '../Offer/Offer';
import FavouriteButton from '../FavouriteButton/FavouriteButton';

import './styles.scss';

function FlightOffer({
  departurePlace,
  returnPlace,
  price,
  quoteId,
  departureDate,
  returnDate,
  departureCarrier,
  returnCarrier,
  direct,
}) {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const favouritesOffers = useSelector((state) => state.favouriteConnections);

  const isAddedToFavourites = !!favouritesOffers.find(
    (flight) =>
      flight.departureCarrier === departureCarrier && flight.price === price,
  );

  function addToFavourite() {
    setActive((prevState) => !prevState);
    dispatch(
      addFavouriteOffer(
        departurePlace,
        returnPlace,
        price,
        quoteId,
        departureDate,
        returnDate,
        departureCarrier,
        returnCarrier,
        direct,
      ),
    );
  }

  return (
    <div className="offer">
      <Offer
        departurePlace={departurePlace}
        returnPlace={returnPlace}
        price={price}
        id={quoteId}
        departureDate={departureDate}
        returnDate={returnDate}
        departureCarrier={departureCarrier}
        returnCarrier={returnCarrier}
        direct={direct}
      />
      {active || isAddedToFavourites ? (
        <div className="offer__add_favourite">
          <span>Added to favourites</span>
        </div>
      ) : (
        <FavouriteButton
          className="offer__icon"
          addFavouriteButton={addToFavourite}
          active={active}
        />
      )}
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
  quoteId: PropTypes.string.isRequired,
};

export default FlightOffer;
