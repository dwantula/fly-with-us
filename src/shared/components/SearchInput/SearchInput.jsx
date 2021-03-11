import React, { useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';

import './styles.scss';

function SearchInput({ items, setChosenItem }) {
  const [inputValue, setInputValue] = useState('');
  const [isCountriesListExpanded, setCountriesListExpanded] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  const filterItems = useMemo(
    () =>
      debounce((items, filterPhrase) => {
        const itemsFiltered = items.filter(({ name }) =>
          name.toLowerCase().includes(filterPhrase.toLowerCase()),
        );
        setFilteredItems(itemsFiltered);
      }, 300),
    [],
  );

  const handleInputChange = (event) => {
    const filterPhrase = event.target.value;
    setInputValue(filterPhrase);
    filterItems(items, filterPhrase);
  };

  function toggleCountriesList() {
    setCountriesListExpanded((prevState) => !prevState);
  }

  function onItemsSelect(name) {
    setInputValue(name);
    setChosenItem(name);
    toggleCountriesList();
  }

  return (
    <div className="search-input">
      <Input
        onChange={handleInputChange}
        value={inputValue}
        placeholder="Search countries"
        name="country"
        onFocus={toggleCountriesList}
        type="text"
        className="search-input__input"
      />
      <div className="search-input__list-items">
        {isCountriesListExpanded ? (
          <ul className="search-input__list">
            {filteredItems.map(({ name, code }) => (
              <li className="search-input__item" key={code}>
                <Button
                  className="search-input__item-button"
                  type="button"
                  onClick={() => onItemsSelect(name)}
                  text={name}
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
SearchInput.propTypes = {
  setChosenItem: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
    }),
  ),
};

SearchInput.defaultProps = {
  setChosenItem: () => {},
  items: [],
};

export default SearchInput;
