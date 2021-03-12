import React, { useMemo, useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';

import './styles.scss';
import Spinner from '../Spinner/Spinner';

function SearchInput({
  items,
  setChosenItem,
  inputName,
  inputPlaceholder,
  isSearchingItems,
}) {
  const [inputValue, setInputValue] = useState('');
  const [isCountriesListExpanded, setCountriesListExpanded] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isloading, setLoading] = useState(false);

  const ref = useOnclickOutside(() => {
    setCountriesListExpanded(false);
  });

  const filterItems = useMemo(
    () =>
      debounce((items, filterPhrase) => {
        setLoading(!isloading);
        const itemsFiltered = items.filter(({ name }) =>
          name.toLowerCase().includes(filterPhrase.toLowerCase()),
        );
        setFilteredItems(itemsFiltered);
        setLoading((prevState) => prevState);
      }, 300),
    [isloading],
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
        placeholder={inputPlaceholder}
        name={inputName}
        onFocus={toggleCountriesList}
        type="text"
        className="search-input__input"
      />
      {isSearchingItems ? (
        <Spinner />
      ) : (
        <div ref={ref} className="search-input__list-items">
          {isCountriesListExpanded ? (
            <ul className="search-input__list">
              {isloading ? (
                <Spinner />
              ) : (
                filteredItems.map(({ name, code }) => (
                  <li className="search-input__item" key={code}>
                    <Button
                      className="search-input__item-button"
                      type="button"
                      onClick={() => onItemsSelect(name)}
                      text={name}
                    />
                  </li>
                ))
              )}
            </ul>
          ) : null}
        </div>
      )}
    </div>
  );
}
SearchInput.propTypes = {
  setChosenItem: PropTypes.func,
  isSearchingItems: PropTypes.bool.isRequired,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
    }),
  ),
};

SearchInput.defaultProps = {
  setChosenItem: () => {},
  inputPlaceholder: '',
  inputName: '',
  items: [],
};

export default SearchInput;
