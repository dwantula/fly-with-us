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
        const itemsFiltered = items.filter(({ Name: name }) =>
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
    <div className="main__countries">
      <Input
        onChange={handleInputChange}
        value={inputValue}
        placeholder="Search countries"
        name="country"
        onFocus={toggleCountriesList}
        type="text"
        className="main__input"
      />
      {isCountriesListExpanded ? (
        <div className="main__countries-list">
          <ul className="main__list-country">
            {filteredItems.map(({ Name: name, Code: code }) => (
              <li className="main__country" key={code}>
                <Button
                  className="main__country-button"
                  type="button"
                  onClick={() => onItemsSelect(name)}
                  text={name}
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
  setChosenItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
    }),
  ).isRequired,
};

export default SearchInput;
