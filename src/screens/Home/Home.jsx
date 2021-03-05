import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesAction } from 'shared/store/countires/actions';

import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';

import './styles.scss';

function Home() {
  const countries = useSelector((state) => state.countries);
  const [countriesSearch, setCountriesSearch] = useState('Andorra');
  const [countriesChoose, setCountriesChoose] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAction());
  }, [dispatch]);

  function handleCountriesChange(event) {
    setCountriesSearch(event.target.value);
  }

  function findCountries() {
    const countrySearch = countries.countries.filter((country) =>
      country.Name.includes(countriesSearch),
    );
    setCountriesChoose(countrySearch);
  }

  console.log(countriesChoose);

  console.log(findCountries());

  return (
    <div className="main">
      <img className="main__image" src="images/main.jpg" alt="view" />
      <h1 className="main__title">Let the journey begin</h1>
      <div className="main__search">
        <Input
          onChange={handleCountriesChange}
          value={countriesSearch}
          placeholder="Search countries"
        />
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
