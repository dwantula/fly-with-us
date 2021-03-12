import apiClient from './apiClient';

export async function fetchCountriesList() {
  const response = await apiClient.get('/reference/v1.0/countries/en-US');
  return response.data.Countries.map((country) => ({
    name: country.Name,
    code: country.Code,
  }));
}
