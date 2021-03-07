import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesAction } from 'shared/store/countires/actions';

import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';

import './styles.scss';

function Home() {
  const countries = useSelector((state) => state.countries);
  const [countrySearch, setCountrySearch] = useState('');
  const [countryChoose, setCountryChoose] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAction());
  }, [dispatch]);

  function findCountries() {
    const countryChoice = countries.countries.filter((country) =>
      country.Name.includes(countrySearch),
    );
    setCountryChoose(countryChoice);
  }

  function handleCountriesChange(event) {
    setCountrySearch(event.target.value);
    findCountries(event.target.value);
  }

  return (
    <div className="main">
      <img className="main__image" src="images/main.jpg" alt="view" />
      <h1 className="main__title">Let the journey begin</h1>
      <div className="main__search">
        <form className="main__dropdown">
          <Input
            onChange={handleCountriesChange}
            value={countrySearch}
            placeholder="Search countries"
            name="country"
            list="country"
            onBlur={() => setCountryChoose(countrySearch)}
          />
          <datalist className="form-control" id="country">
            {countries.countries.map((country) => (
              <option
                key={country.Code}
                value={country.Name}
                label={country.Name}
              />
            ))}
          </datalist>
        </form>
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
