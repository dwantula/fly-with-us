import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getOriginPlaceAction,
  getDestinationPlaceAction,
  clearDestinationPlacesAction,
  clearOriginPlacesAction,
} from 'shared/store/places/actions';
import {
  getTravelQuotesAction,
  clearTravelQuotes,
} from 'shared/store/searchConnection/actions';
import Button from 'shared/components/Button/Button';
import SearchInput from 'shared/components/SearchInput/SearchInput';
import DateOfTravel from 'shared/components/DateOfTravel/DateOfTravel';
import FlightOffers from 'screens/FlightOffers/FlightOffers';

import './styles.scss';

function Home() {
  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [dateOfReturn, setDateOfReturn] = useState('');

  const { originPlaces } = useSelector((state) => state.places);
  const { destinationPlaces } = useSelector((state) => state.places);
  const { isLoadingOriginPlaces } = useSelector((state) => state.places);
  const { isLoadingDestinationPlaces } = useSelector((state) => state.places);
  const { carriers, places, quotes } = useSelector(
    (state) => state.travelOffers,
  );
  const isLoadingFlightOffers = useSelector(
    (state) => state.travelOffers.loading,
  );

  const errorMessage = useSelector((state) => state.travelOffers.error);

  const dispatch = useDispatch();

  function getDestinationPlaces(value) {
    dispatch(getDestinationPlaceAction(value));
  }

  function clearDestinationPlaces() {
    dispatch(clearDestinationPlacesAction());
  }

  const getOriginPlaces = useCallback(
    (value) => {
      dispatch(getOriginPlaceAction(value));
    },
    [dispatch],
  );

  function clearOriginPlaces() {
    dispatch(clearOriginPlacesAction());
  }

  function getFlightOffers() {
    dispatch(
      getTravelQuotesAction(
        originPlace,
        destinationPlace,
        departureDate,
        dateOfReturn,
      ),
    );
    dispatch(clearTravelQuotes());
  }

  const todayDate = new Date().toISOString().slice(0, 10);

  return (
    <div className="main">
      <div className="main__title">
        <h1>Let the journey begin</h1>
      </div>
      <div className="main__search">
        <div>
          <span>From</span>
          <SearchInput
            items={originPlaces}
            setChosenItem={setOriginPlace}
            inputName="origin"
            inputPlaceholder="Write country or city "
            isLoadingItems={isLoadingOriginPlaces}
            searchAction={getOriginPlaces}
            removeItems={clearOriginPlaces}
          />
        </div>
        <div>
          <span>To</span>
          <SearchInput
            items={destinationPlaces}
            setChosenItem={setDestinationPlace}
            inputName="destination"
            inputPlaceholder="Write country or city"
            isLoadingItems={isLoadingDestinationPlaces}
            searchAction={getDestinationPlaces}
            removeItems={clearDestinationPlaces}
          />
        </div>
        <div>
          <DateOfTravel
            setChosenDate={setDepartureDate}
            inputName="departureDate"
            description="Depart"
            min={todayDate}
          />
        </div>
        <div>
          <DateOfTravel
            setChosenDate={setDateOfReturn}
            inputName="dateOfReturn"
            description="Return"
            min={departureDate}
          />
          <div className="main__button">
            <Button
              onClick={getFlightOffers}
              className="main__button-search"
              text="Search Flights"
            />
          </div>
        </div>
      </div>
      {isLoadingFlightOffers || quotes.length ? (
        <FlightOffers
          places={places}
          carriers={carriers}
          quotes={quotes}
          isLoadingFlightOffers={isLoadingFlightOffers}
        />
      ) : null}
      <div>
        {errorMessage ? (
          <div className="main__error-text"> {errorMessage}</div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
