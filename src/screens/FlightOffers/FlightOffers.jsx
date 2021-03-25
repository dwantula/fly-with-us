import React from 'react';

import { useSelector } from 'react-redux';

import './styles.scss';

function FlightOffers() {
  const { carriers, places, flightList } = useSelector(
    (state) => state.travelOffers,
  );

  console.log(flightList);
  return (
    <div className="offers-list">
      <div className="offers-list__ofert">
        {carriers.map(({ CarrierId, Name }) => (
          <p>
            Carriers: {Name}, {CarrierId}
          </p>
        ))}
      </div>
      <div>
        {places.map(({ Name }) => (
          <div className="offers-list__ofert">
            <p>{Name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightOffers;
