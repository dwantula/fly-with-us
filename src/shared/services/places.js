import apiClient from './apiClient';

export async function fetchPlacesList(param) {
  const response = await apiClient.get('/autosuggest/v1.0/PL/PLN/PL/', {
    params: {
      query: param,
    },
  });
  return response.data.Places.map((place) => ({
    name: place.PlaceName,
    id: place.PlaceId,
  }));
}
