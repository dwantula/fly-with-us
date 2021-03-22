import React from 'react';
import PropTypes from 'prop-types';

import Input from 'shared/components/Input/Input';

import './styles.scss';

function DataOfTravel({ inputName, setChosenDate, description }) {
  function handleDateChange(event) {
    setChosenDate(event.target.value);
  }

  return (
    <div className="date">
      <span className="date__text">{description}</span>
      <Input
        type="date"
        className="date__input"
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
