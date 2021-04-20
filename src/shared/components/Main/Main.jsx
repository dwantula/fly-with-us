import React from 'react';

import { Route, Switch } from 'react-router-dom';

import TrackingFlights from 'screens/FavouriteFlights/FavouriteFlights';
import Home from 'screens/Home/Home';

import './styles.scss';

function Main() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/trackingFlights" component={TrackingFlights} />
      <Route component={() => <h3>Strona nie istnieje</h3>} />
    </Switch>
  );
}

export default Main;
