import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'shared/components/Spinner/Spinner';

import './styles.scss';

function FlightOffers({ carriers, places, flightList, isLoadingFlightOffers }) {
  return (
    <div className="offers-list">
      {isLoadingFlightOffers && <Spinner />}
      <div className="offers-list__ofert">
        {carriers.map(({ CarrierId, Name }) => (
          <p>
            {Name}, {CarrierId}
          </p>
        ))}
        {places.map(({ SkyscannerCode }) => (
          <div className="offers-list__ofert">
            <p>{SkyscannerCode}</p>
            <span />
          </div>
        ))}
      </div>
    </div>
  );
}
FlightOffers.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
    }),
  ).isRequired,
  carriers: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
    }),
  ).isRequired,
  flightList: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
    }),
  ).isRequired,
  isLoadingFlightOffers: PropTypes.bool.isRequired,
};

export default FlightOffers;
