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

function Home() {
  const [originPlace, setOriginPlace] = useState('');
  const [destinationPlace, setDestinationPlace] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [dateOfReturn, setDateOfReturn] = useState('');
  const [isLoading, setLoading] = useState(false);

  const { originPlaces } = useSelector((state) => state.places);
  const { destinationPlaces } = useSelector((state) => state.places);
  const { isLoadingOriginPlaces } = useSelector((state) => state.places);
  const { isLoadingDestinationPlaces } = useSelector((state) => state.places);
  const { places, carriers, flightList } = useSelector(
    (state) => state.travelOffers,
  );
  const isLoadingFlightOffers = useSelector(
    (state) => state.travelOffers.loading,
  );

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

  function getFlightOffers() {
    dispatch(
      getTravelQuotesAction(
        originPlace,
        destinationPlace,
        departureDate,
        dateOfReturn,
      ),
    );
    setTimeout(() => {
      setLoading(true);
    }, 2000);
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
      {(() => {
        if (isLoading && places.length === 0) {
          return (
            <h2 className="main__error-text">
              Sorry, there are not any flights that match your filters.
            </h2>
          );
        }
        return null;
      })()}
      <div>
        {isLoadingFlightOffers || places.length ? (
          <FlightOffers
            places={places}
            carriers={carriers}
            flightList={flightList}
            isLoadingFlightOffers={isLoadingFlightOffers}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Home;

// {
//   isLoadingFlightOffers || places.length ? (
//     <FlightOffers
//       places={places}
//       carriers={carriers}
//       flightList={flightList}
//       isLoadingFlightOffers={isLoadingFlightOffers}
//     />
//   ) : null;
// }

// {(() => {
//   if (isLoadingFlightOffers || places.length) {
//     return (
//       <FlightOffers
//         places={places}
//         carriers={carriers}
//         flightList={flightList}
//         isLoadingFlightOffers={isLoadingFlightOffers}
//       />
//     );
//   }
//   return null;
// })()}

// {(()=> {
//   if (places.length===0) {
//     return (
//       <h2>lipa</h2>
//     )
//   }
//   return null
// })()}
