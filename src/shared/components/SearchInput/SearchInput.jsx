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
  const [onItemSelect, setOnItemSelect] = useState(false);

  const ref = useOnclickOutside(() => {
    setOnItemSelect(false);
  });

  const searchActionDebounced = useMemo(
    () =>
      debounce((filterPhrase) => {
        searchAction(filterPhrase);
      }, 600),

    [searchAction],
  );

  const handleInputChange = (event) => {
    const filterPhrase = event.target.value;
    searchActionDebounced(filterPhrase);
    setInputValue(filterPhrase);
  };

  function toggleItemsList() {
    setOnItemSelect((prevState) => !prevState);
  }

  function onItemsSelect(name, id) {
    setInputValue(`${name} (${id.split('-')[0]})`);
    setChosenItem(id);
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
      <div ref={ref} className="search-input__list-items">
        {onItemSelect ? (
          <ul className="search-input__list">
            {(() => {
              if (isLoadingItems) {
                return <Spinner />;
              }
              return null;
            })()}
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
