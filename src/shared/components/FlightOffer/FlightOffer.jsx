import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlane } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

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
  function watchFly() {
    console.log('obserwuje');
  }

  return (
    <div className="offer">
      <div>
        <div className="offer__departure">
          <div className="offer__carrier">
            <p>{departureCarrier}</p>
            <FontAwesomeIcon
              icon={faPlane}
              className="offer_icon-plane-depart"
            />
          </div>
          <div className="offer__road">
            <p>{departureDate.substr(5, 5)}</p>
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
              <p>{returnDate.substr(5, 5)}</p>
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
          <span>Watch:</span>
          <button
            type="button"
            onClick={watchFly}
            className="offer__button-watch"
          >
            <FontAwesomeIcon className="offers__icon" icon={faStar} />
          </button>
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
  direct: PropTypes.bool.isRequired,
  returnDate: PropTypes.string.isRequired,
  departureCarrier: PropTypes.string.isRequired,
  returnCarrier: PropTypes.string.isRequired,
};

export default FlightOffer;
