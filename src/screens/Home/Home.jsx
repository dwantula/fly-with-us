import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesAction } from 'shared/store/countires/actions';

import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';

import './styles.scss';

function Home() {
  const { countries } = useSelector((state) => state.countries);
  const [countryFilter, setCountryFilter] = useState([]);
  const [countriesFilltered, setCountriesFilltered] = useState([]);
  const [isCountriesListExpanded, setCountriesListExpanded] = useState(false);
  const [chosenCountry, setChosenCountry] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAction());
  }, [dispatch]);

  function filterCountries() {
    const countriesFiltered = countries.filter((country) =>
      country.Name.includes(countryFilter),
    );
    setCountriesFilltered(countriesFiltered);
  }

  function handleCountriesChange(event) {
    setCountryFilter(event.target.value);
    filterCountries(event.target.value);
  }

  function toggleCountriesList() {
    setCountriesListExpanded((prevState) => !prevState);
  }

  console.log(chosenCountry);

  return (
    <div className="main">
      <img className="main__image" src="images/main.jpg" alt="view" />
      <h1 className="main__title">Let the journey begin</h1>
      <div className="main__search">
        <div className="main__countries">
          <Input
            onChange={handleCountriesChange}
            value={countryFilter}
            placeholder="Search countries"
            name="country"
            onFocus={toggleCountriesList}
            onBlur={toggleCountriesList}
            type="text"
          />
          {isCountriesListExpanded ? (
            <div className="main__countries-list">
              <ul className="main__list-country">
                {countriesFilltered.map(({ Name, Code }) => (
                  <li className="main__country" key={Code}>
                    <button
                      type="button"
                      onClick={() => setChosenCountry(Name)}
                    >
                      {Name}
                    </button>
                  </li>
                ))}
              </ul>
              <div>{chosenCountry}</div>
            </div>
          ) : null}
        </div>
        <Input />
        <Input />
        <Input />
      </div>
      <div className="main__search-column">
        <Button className="main__button" text="Let's go" />
      </div>
    </div>
  );
}

export default Home;
