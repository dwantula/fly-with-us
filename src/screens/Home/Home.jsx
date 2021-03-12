import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCountriesAction } from 'shared/store/countires/actions';

import Button from 'shared/components/Button/Button';
import SearchInput from 'shared/components/SearchInput/SearchInput';

import './styles.scss';

function Home() {
  const { countries } = useSelector((state) => state.countries);
  const [chosenCountry, setChosenCountry] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAction());
  }, [dispatch]);

  return (
    <div className="main">
      <div className="main__title">
        <h1 className="main__title-text">Let the journey begin</h1>
      </div>
      <div className="main__search">
        <SearchInput
          items={countries}
          setChosenItem={setChosenCountry}
          inputName="country"
          inputPlaceholder="Search countries"
        />
      </div>
      <div className="main__button">
        <Button className="main__button-search" text="Let's go" />
      </div>
    </div>
  );
}

export default Home;
