import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

function FavouriteButton({ addFavouriteButton }) {
  return (
    <div className="favourite-button">
      <span>Watch:</span>

      <button
        type="button"
        onClick={addFavouriteButton}
        className="offer__button-watch"
      >
        <FontAwesomeIcon className="offers__icon" icon={faStar} />
      </button>
    </div>
  );
}

FavouriteButton.propTypes = {
  addFavouriteButton: PropTypes.func,
};

FavouriteButton.defaultProps = {
  addFavouriteButton: () => {},
};

export default FavouriteButton;
