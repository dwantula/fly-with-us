import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

function FavouriteButton({ active, addFavouriteButton }) {
  return (
    <div className="favourite-button">
      <span>Watch:</span>
      <button
        type="button"
        onClick={addFavouriteButton}
        className="offer__button-watch"
      >
        <FontAwesomeIcon
          className={active ? 'offers__icon-active' : 'offers__icon'}
          icon={faStar}
        />
      </button>
    </div>
  );
}

FavouriteButton.propTypes = {
  active: PropTypes.bool,
  addFavouriteButton: PropTypes.func,
};

FavouriteButton.defaultProps = {
  active: false,
  addFavouriteButton: () => {},
};

export default FavouriteButton;
