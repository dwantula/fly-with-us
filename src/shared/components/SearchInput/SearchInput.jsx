import React, { useMemo, useState, useRef } from 'react';
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
  const closeList = useRef(null);

  const searchActionDebounced = useMemo(
    () =>
      debounce((filterPhrase) => {
        if (filterPhrase) {
          searchAction(filterPhrase);
        }
      }, 600),

    [searchAction],
  );

  const handleInputChange = (event) => {
    const filterPhrase = event.target.value;
    searchActionDebounced(filterPhrase);
    setInputValue(filterPhrase);
  };

  function toggleItemsList() {
    setItemsListExpanded((prevState) => !prevState);
  }

  function onItemsSelect(name, id) {
    setInputValue(`${name} (${id.split('-')[0]})`);
    setChosenItem(id);
    toggleItemsList();
  }

  function getItem() {
    console.log('aaa');
    const firstItem = items[0];
    console.log(firstItem);
    if (firstItem) {
      const { name, id } = firstItem;
      onItemsSelect(name, id);
    }
    setItemsListExpanded(false);
  }

  useOnclickOutside(closeList, getItem);

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
          <ul list={closeList} className="search-input__list">
            {isLoadingItems ? <Spinner /> : null}
            {items.map(({ name, id }) => (
              <li className="search-input__item" key={id}>
                <Button
                  className="search-input__item-button"
                  type="button"
                  onClick={() => onItemsSelect(name, id)}
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
  inputPlaceholder: '',
  inputName: '',
  items: [],
  isLoadingItems: false,
};

export default SearchInput;
