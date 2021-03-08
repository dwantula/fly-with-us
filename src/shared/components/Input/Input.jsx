import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Input({ onBlur, onFocus, name, onChange, placeholder, type }) {
  return (
    <input
      className="input"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      onFocus={onFocus}
      onBlur={onBlur}
      autoComplete="off"
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  onChange: () => {},
  name: '',
  type: '',
  onBlur: () => {},
  onFocus: () => {},
};

export default Input;
