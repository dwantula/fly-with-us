import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DeleteButton({ deleteOffer, price }) {
  return (
    <div className="offers__icon-watch">
      <span>Delete:</span>
      <button
        onClick={() => deleteOffer(price)}
        type="button"
        className="offer__button-watch"
      >
        <FontAwesomeIcon className="offers__icon-trash" icon={faTrash} />
      </button>
    </div>
  );
}

DeleteButton.propTypes = {
  deleteOffer: PropTypes.func,
  price: PropTypes.string,
};

DeleteButton.defaultProps = {
  deleteOffer: () => {},
  price: '',
};

export default DeleteButton;
