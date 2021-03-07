import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Input({ onBlur, list, name, onChange, placeholder, type }) {
  return (
    <input
      className="input"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      list={list}
      onBlur={onBlur}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  list: PropTypes.string,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  onChange: () => {},
  name: '',
  type: '',
  list: '',
  onBlur: () => {},
};

export default Input;
