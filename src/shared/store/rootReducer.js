import { combineReducers } from 'redux';
import countriesReducer from './countires/reducer';
import placesReducer from './places/reducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  places: placesReducer,
});

export default rootReducer;
