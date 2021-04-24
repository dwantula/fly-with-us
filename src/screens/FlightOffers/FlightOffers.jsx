import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'shared/components/Spinner/Spinner';
import FlightOffer from 'shared/components/FlightOffer/FlightOffer';

import './styles.scss';

function FlightOffers({ carriers, places, quotes, isLoadingFlightOffers }) {
  return (
    <div className="offers">
      {isLoadingFlightOffers ? <Spinner /> : null}
      <div className="offers__ofert">
        {quotes.map(
          ({
            departureCarrierId,
            departureDate,
            departurePlaceId,
            price,
            direct,
            quoteId,
            returnCarrierId,
            returnDate,
            returnPlaceId,
          }) => (
            <div key={quoteId}>
              <FlightOffer
                departurePlace={places[departurePlaceId].name}
                returnPlace={places[returnPlaceId].name}
                price={price}
                quoteId={quoteId}
                direct={direct}
                departureDate={departureDate}
                returnDate={returnDate}
                departureCarrier={carriers[departureCarrierId].name}
                returnCarrier={carriers[returnCarrierId].name}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
FlightOffers.propTypes = {
  places: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  carriers: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      carrierId: PropTypes.string,
    }),
  ).isRequired,
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quoteId: PropTypes.string,
    }),
  ),
  isLoadingFlightOffers: PropTypes.bool.isRequired,
};

FlightOffers.defaultProps = {
  quotes: [],
};

export default FlightOffers;
