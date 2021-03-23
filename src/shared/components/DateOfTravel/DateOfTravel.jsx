import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from 'shared/components/Input/Input';

import './styles.scss';

function DataOfTravel({ inputName, setChosenDate, description }) {
  const [inputValue, setInputValue] = useState('');

  function handleDateChange(event) {
    const { value } = event.target;
    setChosenDate(value);
    setInputValue(value);
  }

  return (
    <div className="date">
      <span className="date__text">{description}</span>
      <Input
        type="date"
        className="date__input"
        value={inputValue}
        onChange={handleDateChange}
        name={inputName}
      />
    </div>
  );
}

DataOfTravel.propTypes = {
  inputName: PropTypes.string.isRequired,
  description: PropTypes.string,
  setChosenDate: PropTypes.func,
};

DataOfTravel.defaultProps = {
  description: '',
  setChosenDate: () => {},
};

export default DataOfTravel;
