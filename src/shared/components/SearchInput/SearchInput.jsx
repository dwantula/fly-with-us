import React, { useMemo, useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import Input from '../Input/Input';

import './styles.scss';

function SearchInput({
  items,
  setChosenItem,
  inputName,
  inputPlaceholder,
  isLoadingItems,
  searchAction,
}) {
  const [inputValue, setInputValue] = useState('');
  const [isItemsListExpanded, setItemsListExpanded] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isSearchingItems, setSearchingItems] = useState(false);

  const ref = useOnclickOutside(() => {
    setItemsListExpanded(false);
  });

  const filterItems = useMemo(
    () =>
      debounce((items, filterPhrase) => {
        setSearchingItems((prevState) => !prevState);
        const itemsFiltered = items.filter(({ name }) =>
          name.toLowerCase().includes(filterPhrase.toLowerCase()),
        );
        setFilteredItems(itemsFiltered);

        setSearchingItems((prevState) => !prevState);
      }, 300),
    [],
  );

  const searchActionDebounced = useMemo(
    () =>
      debounce((filterPhrase) => {
        searchAction(filterPhrase);
      }, 300),
    [searchAction],
  );

  const handleInputChange = (event) => {
    const filterPhrase = event.target.value;
    setInputValue(filterPhrase);
    filterItems(items, filterPhrase);
    searchActionDebounced(filterPhrase);
  };

  function toggleItemsList() {
    setItemsListExpanded((prevState) => !prevState);
  }

  function onItemsSelect(name) {
    setInputValue(name);
    setChosenItem(name);
    searchActionDebounced(name);
    toggleItemsList();
  }

  return (
    <div className="search-input">
      <Input
        onChange={handleInputChange}
        value={inputValue}
        placeholder={inputPlaceholder}
        name={inputName}
        onFocus={toggleItemsList}
        type="text"
        className="search-input__input"
      />
      {(() => {
        if (isLoadingItems) {
          return <Spinner />;
        }
        return null;
      })()}
      <div ref={ref} className="search-input__list-items">
        {isItemsListExpanded ? (
          <ul className="search-input__list">
            {isSearchingItems ? (
              <Spinner />
            ) : (
              filteredItems.map(({ name, id }) => (
                <li className="search-input__item" key={id}>
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
    </div>
  );
}

SearchInput.propTypes = {
  setChosenItem: PropTypes.func,
  searchAction: PropTypes.func,
  isLoadingItems: PropTypes.bool,
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
  searchAction: () => {},
  inputPlaceholder: '',
  inputName: '',
  items: [],
  isLoadingItems: false,
};

export default SearchInput;
