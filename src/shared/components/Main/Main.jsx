import React from 'react';

import { Route, Switch } from 'react-router-dom';

import MyBooking from 'screens/MyBooking/MyBooking';
import TrackingFlights from 'screens/TrackingFlights/TrackingFlights';
import Home from 'screens/Home/Home';

import './styles.scss';

function Main() {
  return (
    <Switch>
      <Route path="/Home" exact component={Home} />
      <Route path="/MyBooking" component={MyBooking} />
      <Route path="/TrackingFlights" component={TrackingFlights} />
      <Route component={() => <h3>Strona nie istnieje</h3>} />
    </Switch>
  );
}

export default Main;
