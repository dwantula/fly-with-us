import apiClient from './apiClient';

export async function fetchPlacesList(country) {
  const response = await apiClient.get('/autosuggest/v1.0/PL/PLN/PL/', {
    params: {
      query: country,
    },
  });
  return response.data.Places.map((place) => ({
    name: place.PlaceName,
    id: place.PlaceId,
  }));
}
