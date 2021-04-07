import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faStar,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';

import Spinner from 'shared/components/Spinner/Spinner';

import './styles.scss';

function FlightOffers({ carriers, places, quotes, isLoadingFlightOffers }) {
  console.log(carriers);
  console.log(places);
  console.log(quotes);

  return (
    <div className="offers">
      {isLoadingFlightOffers ? <Spinner /> : null}
      <div className="offers__ofert">
        <div className="offers__carriers">
          {carriers.map(({ name }) => (
            <div>
              <p>{name}</p>
              <div className="offers__carriers-icon">
                <FontAwesomeIcon icon={faPlane} />
              </div>
            </div>
          ))}
        </div>
        <div className="offers__places">
          {places.map(({ name }) => (
            <p>{name}</p>
          ))}
        </div>
        <div className="offers__quotes">
          {quotes.map(({ departureDate, price, returnDate }) => (
            <>
              <div className="offers__date">
                <p>Outbound: {departureDate}</p>
                <p>Return: {returnDate}</p>
              </div>
              <div className="offers__price">
                <p>Price: {price} zł</p>
              </div>
            </>
          ))}
        </div>
        <div className="offers__select">
          <div className="offers__icon-buy">
            <span>Buy:</span>
            <FontAwesomeIcon className="offers__icon" icon={faShoppingCart} />
          </div>
          <div className="offers__icon-watch">
            <span>Watch:</span>
            <FontAwesomeIcon className="offers__icon" icon={faStar} />
          </div>
        </div>
      </div>
    </div>
  );
}
FlightOffers.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  carriers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      carrierId: PropTypes.string,
    }),
  ).isRequired,
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number,
    }),
  ),
  isLoadingFlightOffers: PropTypes.bool.isRequired,
};

FlightOffers.defaultProps = {
  quotes: [],
};

export default FlightOffers;
