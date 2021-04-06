import { combineReducers } from 'redux';
import countriesReducer from './countires/reducer';
import placesReducer from './places/reducer';
import travelQuotesReducer from './searchConnection/reducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  places: placesReducer,
  travelOffers: travelQuotesReducer,
});

export default rootReducer;
