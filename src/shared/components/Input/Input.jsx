import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Input({
  className,
  value,
  onBlur,
  onFocus,
  name,
  onChange,
  placeholder,
  type,
}) {
  return (
    <input
      className={className}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      onFocus={onFocus}
      onBlur={onBlur}
      autoComplete="off"
      value={value}
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
  value: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  onChange: () => {},
  name: '',
  type: '',
  onBlur: () => {},
  onFocus: () => {},
  value: '',
  className: '',
};

export default Input;
