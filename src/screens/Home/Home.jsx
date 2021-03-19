import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

  const { originPlaces } = useSelector((state) => state.places);
  const { destinationPlaces } = useSelector((state) => state.places);
  const { isLoadingOriginPlaces } = useSelector((state) => state.places);
  const { isLoadingDestinationPlaces } = useSelector((state) => state.places);

  const dispatch = useDispatch();

  function getDestinationPlaces(value) {
    dispatch(getDestinationPlaceAction(value));
  }

  function getOriginplaces(value) {
    dispatch(getOriginPlaceAction(value));
  }

  return (
    <div className="main">
      <div className="main__title">
        <h1 className="main__title-text">Let the journey begin</h1>
      </div>
      <div className="main__search main--column">
        <div className="main__search-from">
          <span>From</span>
          <SearchInput
            items={originPlaces}
            setChosenItem={setPlaceOrigin}
            inputName="origin"
            inputPlaceholder="Where do You want to fly"
            isLoadingItems={isLoadingOriginPlaces}
            searchAction={getOriginplaces}
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
            searchAction={getDestinationPlaces}
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
