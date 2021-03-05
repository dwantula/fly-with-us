import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesAction } from 'shared/store/countires/actions';

import './styles.scss';

function TrackingFlights() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAction());
  }, [dispatch]);

  return <div>tracking </div>;
}

export default TrackingFlights;
