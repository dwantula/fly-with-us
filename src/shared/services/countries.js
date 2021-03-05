import { saveItemInLocalStorage } from 'utils/localStorage';
import apiClient from './apiClient';

const COUNTRIES_KEY = 'countries';
export default async function fetchCountriesList() {
  const response = await apiClient.get('/reference/v1.0/countries/en-US');
  const countries = response.data;
  saveItemInLocalStorage(COUNTRIES_KEY, countries);
  return countries;
}
