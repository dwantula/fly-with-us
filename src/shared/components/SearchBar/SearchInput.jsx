import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';

import './styles.scss';

function SearchInput({
  setCountryFilter,
  itemFilter,
  options,
  setCountriesFilltered,
  itemsFilter,
  setChosenCountry,
}) {
  const [isCountriesListExpanded, setCountriesListExpanded] = useState(false);

  function filterItems() {
    const itemsFiltered = options.filter((option) =>
      option.Name.toLowerCase().includes(itemFilter.toLowerCase()),
    );
    setCountriesFilltered(itemsFiltered);
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setCountryFilter(value);
    const handleChangeDebounce = debounce(() => filterItems(value), 1000);
    handleChangeDebounce();
  }

  function toggleCountriesList() {
    setCountriesListExpanded((prevState) => !prevState);
  }

  function onItemsSelect(name) {
    setChosenCountry(name);
    setCountryFilter(name);
    toggleCountriesList();
  }
  return (
    <div className="main__countries">
      <Input
        onChange={handleInputChange}
        value={itemFilter}
        placeholder="Search countries"
        name="country"
        onFocus={toggleCountriesList}
        type="text"
        className="main__input"
      />
      {isCountriesListExpanded ? (
        <div className="main__countries-list">
          <ul className="main__list-country">
            {itemsFilter.map(({ Name, Code }) => (
              <li className="main__country" key={Code}>
                <Button
                  className="main__country-button"
                  type="button"
                  onClick={() => onItemsSelect(Name)}
                  text={Name}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
SearchInput.propTypes = {
  itemFilter: PropTypes.string,
  setCountriesFilltered: PropTypes.func,
  setChosenCountry: PropTypes.func,
  setCountryFilter: PropTypes.func,
  itemsFilter: PropTypes.arrayOf(
    PropTypes.shape({
      countries: PropTypes.string,
    }),
  ),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      countries: PropTypes.string,
    }),
  ),
};

SearchInput.defaultProps = {
  setCountriesFilltered: () => {},
  options: [],
  itemFilter: '',
  setCountryFilter: () => {},
  itemsFilter: [],
  setChosenCountry: () => {},
};

export default SearchInput;
