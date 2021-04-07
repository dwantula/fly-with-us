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
  removeItems,
}) {
  const [inputValue, setInputValue] = useState('');
  const [isItemsListExpanded, setItemsListExpanded] = useState(false);

  function toggleItemsList() {
    setItemsListExpanded((prevState) => !prevState);
  }

  const searchActionDebounced = useMemo(
    () =>
      debounce((filterPhrase) => {
        if (filterPhrase) {
          searchAction(filterPhrase);
        }
      }, 1000),

    [searchAction],
  );

  const handleInputChange = (event) => {
    const filterPhrase = event.target.value;
    searchActionDebounced(filterPhrase);
    setInputValue(filterPhrase);
  };

  function onItemSelect(name, id) {
    setInputValue(`${name} (${id.split('-')[0]})`);
    setChosenItem(id);
    toggleItemsList();
    removeItems();
  }

  function getItem() {
    const firstItem = items[0];
    if (firstItem) {
      const { name, id } = firstItem;
      onItemSelect(name, id);
    }
    setItemsListExpanded(false);
  }

  const closeList = useOnclickOutside(() => {
    getItem();
  });

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
      <div className="search-input__list-items">
        {isItemsListExpanded ? (
          <ul ref={closeList} className="search-input__list">
            {isLoadingItems ? <Spinner /> : null}
            {items.map(({ name, id }) => (
              <li className="search-input__item" key={id}>
                <Button
                  className="search-input__item-button"
                  type="button"
                  onClick={() => onItemSelect(name, id)}
                  text={`${name} (${id.split('-')[0]})`}
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
  searchAction: PropTypes.func,
  isLoadingItems: PropTypes.bool,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  removeItems: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
};

SearchInput.defaultProps = {
  setChosenItem: () => {},
  searchAction: () => {},
  removeItems: () => {},
  inputPlaceholder: '',
  inputName: '',
  items: [],
  isLoadingItems: false,
};

export default SearchInput;
