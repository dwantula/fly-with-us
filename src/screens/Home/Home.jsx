import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// import { getCountriesAction } from 'shared/store/countires/actions';
import {
  getOriginPlaceAction,
  getDestinationPlaceAction,
} from 'shared/store/places/actions';

import Button from 'shared/components/Button/Button';
import SearchInput from 'shared/components/SearchInput/SearchInput';

import './styles.scss';

function Home() {
  const [placeOrigin, setPlaceOrigin] = useState('');
  const [placeDestination, setPlaceDestination] = useState('');

  // const { countries } = useSelector((state) => state.countries);
  // const isLoadingCountries = useSelector((state) => state.countries.loading);
  const { originPlaces } = useSelector((state) => state.places);
  console.log(originPlaces);
  const isLoadingOriginPlaces = useSelector((state) => state.places.loading);

  const { destinationPlaces } = useSelector((state) => state.places);
  const { isLoadingDestinationPlaces } = useSelector(
    (state) => state.places.loading,
  );
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCountriesAction());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getPlacesAction());
  // }, [dispatch]);

  return (
    <div className="main">
      <div className="main__title">
        <h1 className="main__title-text">Let the journey begin</h1>
      </div>
      <div className="main__search">
        <div className="main__search-from">
          <span>From</span>
          <SearchInput
            items={originPlaces}
            setChosenItem={setPlaceOrigin}
            inputName="origin"
            inputPlaceholder="Where do You want to fly"
            isLoadingItems={isLoadingOriginPlaces}
            itemsAction={getOriginPlaceAction}
          />
        </div>
        <div className="main__search-from">
          <span>To</span>
          <SearchInput
            items={destinationPlaces}
            setChosenItem={setPlaceDestination}
            inputName="destination"
            inputPlaceholder="Search a destination"
            isLoadingItems={isLoadingDestinationPlaces}
            itemsAction={getDestinationPlaceAction}
          />
        </div>
      </div>
      <div className="main__button">
        <Button className="main__button-search" text="Let's go" />
      </div>
    </div>
  );
}

export default Home;

// {
//   /* <SearchInput
// items={countries}
// setChosenItem={setChosenCountry}
// inputName="country"
// inputPlaceholder="Search countries"
// isLoadingItems={isLoadingCountries}
// /> */
// }
