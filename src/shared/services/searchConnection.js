import apiClient from './apiClient';

export async function fetchTravelQuotes(
  originPlace,
  destinationPlace,
  departureDate,
  dataOfReturn,
) {
  const response = await apiClient.get('/browsequotes/v1.0/PL/PLN/PL/', {
    params: {
      originplace: originPlace,
      destinationplace: destinationPlace,
      outboundpartialdate: departureDate,
      inboundpartialdate: dataOfReturn,
    },
  });
  console.log(response);
  return response;
}
