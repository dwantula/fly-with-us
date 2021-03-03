import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Input({ name, onChange, placeholder, type }) {
  return (
    <input
      className="input"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  onChange: () => {},
  name: '',
  type: '',
};

export default Input;
