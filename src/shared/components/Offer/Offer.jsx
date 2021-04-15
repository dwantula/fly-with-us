import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

function Offer({
  departurePlace,
  returnPlace,
  price,
  departureDate,
  returnDate,
  departureCarrier,
  returnCarrier,
  direct,
}) {
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
      </div>
    </div>
  );
}

Offer.propTypes = {
  departurePlace: PropTypes.string.isRequired,
  returnPlace: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  departureDate: PropTypes.string.isRequired,
  direct: PropTypes.bool.isRequired,
  returnDate: PropTypes.string.isRequired,
  departureCarrier: PropTypes.string.isRequired,
  returnCarrier: PropTypes.string.isRequired,
};

export default Offer;
