import React, { useEffect, useState } from 'react';

import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';
import fetchCountriesList from 'shared/services/countries';

import './styles.scss';

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const countryList = fetchCountriesList();
    setCountries(countryList);
  }, []);
  console.log(countries);

  return (
    <div className="main">
      <img className="main__image" src="images/main.jpg" alt="view" />
      <h1 className="main__title">Let the journey begin</h1>
      <div className="main__search">
        <Input />
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
