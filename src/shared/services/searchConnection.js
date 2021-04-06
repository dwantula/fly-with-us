import apiClient from './apiClient';

export async function fetchTravelQuotes(
  originPlace,
  destinationPlace,
  departureDate,
  dataOfReturn,
) {
  const response = await apiClient.get(
    `/browseroutes/v1.0/PL/PLN/PL/${originPlace}/${destinationPlace}/${departureDate}/${dataOfReturn}`,
  );
  console.log(response);
  const { Carriers: carriers, Places: places, Quotes: quotes } = response.data;

  const convertPlacesToCamelCase = places.map((place) => ({
    name: place.Name,
    id: place.PlaceId,
  }));
  console.log(convertPlacesToCamelCase);
  return convertPlacesToCamelCase;
}
