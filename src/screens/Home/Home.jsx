import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCountriesAction } from 'shared/store/countires/actions';

import Button from 'shared/components/Button/Button';

import './styles.scss';
import SearchInput from 'shared/components/SearchInput/SearchInput';

function Home() {
  const { countries } = useSelector((state) => state.countries);
  const [chosenCountry, setChosenCountry] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAction());
  }, [dispatch]);

  return (
    <div className="main">
      <img className="main__image" src="images/main.jpg" alt="view" />
      <h1 className="main__title">Let the journey begin</h1>
      <div className="main__search">
        <SearchInput items={countries} setChosenItem={setChosenCountry} />
      </div>
      <div className="main__search-column">
        <Button className="main__button" text="Let's go" />
      </div>
    </div>
  );
}

export default Home;
