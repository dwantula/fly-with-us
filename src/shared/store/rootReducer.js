import { combineReducers } from 'redux';
import countriesReducer from './countires/reducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

export default rootReducer;
