import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faStar,
  faPlane,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

function FlightOffer({
  departurePlace,
  returnPlace,
  price,
  departureDate,
  returnDate,
  departureCarrier,
  returnCarrier,
}) {
  return (
    <div className="offer">
      <div className="offer__turn">
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
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="offer__icon-arrow"
              />
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
                <FontAwesomeIcon icon={faLongArrowAltRight} />
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
  );
}

FlightOffer.propTypes = {
  departurePlace: PropTypes.string.isRequired,
  returnPlace: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  departureDate: PropTypes.string.isRequired,
  returnDate: PropTypes.string.isRequired,
  departureCarrier: PropTypes.string.isRequired,
  returnCarrier: PropTypes.string.isRequired,
};

export default FlightOffer;
