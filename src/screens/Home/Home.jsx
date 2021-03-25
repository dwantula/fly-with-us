import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getOriginPlaceAction,
  getDestinationPlaceAction,
} from 'shared/store/places/actions';
import { getTravelQuotesAction } from 'shared/store/searchConnection/actions';
import Button from 'shared/components/Button/Button';
import SearchInput from 'shared/components/SearchInput/SearchInput';
import DateOfTravel from 'shared/components/DateOfTravel/DateOfTravel';

import './styles.scss';
import FlightOffers from 'screens/FlightOffers/FlightOffers';
import Spinner from 'shared/components/Spinner/Spinner';

function Home() {
  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [dateOfReturn, setDateOfReturn] = useState('');
  // const [isFlightOffers, setFlightOffers] = useState(false);

  const { originPlaces } = useSelector((state) => state.places);
  const { destinationPlaces } = useSelector((state) => state.places);
  const { isLoadingOriginPlaces } = useSelector((state) => state.places);
  const { isLoadingDestinationPlaces } = useSelector((state) => state.places);
  const isLoadingTravelList = useSelector(
    (state) => state.travelOffers.loading,
  );
  console.log(isLoadingTravelList);
  const dispatch = useDispatch();

  function getDestinationPlaces(value) {
    dispatch(getDestinationPlaceAction(value));
  }

  const getOriginPlaces = useCallback(
    (value) => {
      dispatch(getOriginPlaceAction(value));
    },
    [dispatch],
  );

  // function toggleItemsList() {
  //   setFlightOffers((prevState) => !prevState);
  // }

  function getFlightOffers() {
    // setFlightOffers((prevState) => !prevState);
    dispatch(
      getTravelQuotesAction(
        originPlace,
        destinationPlace,
        departureDate,
        dateOfReturn,
      ),
    );
    // setFlightOffers((prevState) => !prevState);
  }

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
            setChosenItem={setOriginPlace}
            inputName="origin"
            inputPlaceholder="Write country or city "
            isLoadingItems={isLoadingOriginPlaces}
            searchAction={getOriginPlaces}
          />
        </div>
        <div className="main__search-from">
          <span>To</span>
          <SearchInput
            items={destinationPlaces}
            setChosenItem={setDestinationPlace}
            inputName="destination"
            inputPlaceholder="Write country or city"
            isLoadingItems={isLoadingDestinationPlaces}
            searchAction={getDestinationPlaces}
          />
        </div>
        <DateOfTravel
          setChosenDate={setDepartureDate}
          inputName="departureDate"
          description="Depart"
        />
        <DateOfTravel
          setChosenDate={setDateOfReturn}
          inputName="dateOfReturn"
          description="Return"
        />
      </div>
      <div className="main__button">
        <Button
          onClick={getFlightOffers}
          className="main__button-search"
          text="Let's go"
        />
      </div>

      <div>{isLoadingTravelList ? <Spinner /> : <FlightOffers />}</div>
    </div>
  );
}

export default Home;
