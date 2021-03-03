import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Button({ className, type, onClick, text }) {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type === 'button' ? 'button' : 'submit'}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
  type: '',
};

export default Button;
