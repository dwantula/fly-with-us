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
  const { Carriers, Places, Quotes } = response.data;
  return { carriers: Carriers, places: Places, flightList: Quotes };
}
