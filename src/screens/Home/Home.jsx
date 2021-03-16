import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCountriesAction } from 'shared/store/countires/actions';
import { getPlacesAction } from 'shared/store/places/actions';
import Button from 'shared/components/Button/Button';
import SearchInput from 'shared/components/SearchInput/SearchInput';

import './styles.scss';

function Home() {
  const [chosenCountry, setChosenCountry] = useState('');
  const [chosenPlace, setChosenPlace] = useState('');

  const { countries } = useSelector((state) => state.countries);
  const isLoadingCountries = useSelector((state) => state.countries.loading);
  const { places } = useSelector((state) => state.places);
  const isLoadingPlaces = useSelector((state) => state.places.loading);
  console.log(places);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAction());
  }, [dispatch]);

  useEffect(() => {
    if (chosenCountry) {
      dispatch(getPlacesAction(chosenCountry));
    }
  }, [dispatch, chosenCountry]);

  console.log(chosenPlace);
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
          isLoadingItems={isLoadingCountries}
        />
        {chosenCountry && (
          <SearchInput
            items={places}
            setChosenItem={setChosenPlace}
            inputName="place"
            inputPlaceholder="Search place"
            isLoadingItems={isLoadingPlaces}
          />
        )}
      </div>
      <div className="main__button">
        <Button className="main__button-search" text="Let's go" />
      </div>
    </div>
  );
}

export default Home;
