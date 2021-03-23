import { combineReducers } from 'redux';
import countriesReducer from './countires/reducer';
import placesReducer from './places/reducer';
import travelQoutesReducer from './searchConnection/reducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  places: placesReducer,
  travelQoutes: travelQoutesReducer,
});

export default rootReducer;
