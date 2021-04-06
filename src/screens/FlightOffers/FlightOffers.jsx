import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'shared/components/Spinner/Spinner';

import './styles.scss';

function FlightOffers({
  carriersId,
  carriersName,
  placesName,
  quotesMinPrice,
  isLoadingFlightOffers,
}) {
  console.log(carriersId);
  return (
    <div className="offers-list">
      {/* {isLoadingFlightOffers ? <Spinner /> : null}
      <div className="offers-list__ofert">
        {carriersName}
        {placesName.map(({ SkyscannerCode: skyscannerCode }) => (
          <div key={skyscannerCode} className="offers-list__ofert">
            <p>{skyscannerCode}</p>
            <span />
          </div>
        ))}
      </div> */}
    </div>
  );
}
FlightOffers.propTypes = {
  placesName: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
    }),
  ).isRequired,
  carriersName: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      carrierId: PropTypes.string,
    }),
  ).isRequired,
  quotesMinPrice: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
    }),
  ),
  isLoadingFlightOffers: PropTypes.bool.isRequired,
};

FlightOffers.defaultProps = {
  quotesMinPrice: [],
};

export default FlightOffers;
