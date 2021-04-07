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

  function convertPlaces(Places) {
    return Places.map(({ SkyscannerCode, PlaceId }) => ({
      name: SkyscannerCode,
      id: PlaceId,
    }));
  }

  function convertCarriers(Carriers) {
    return Carriers.map(({ CarrierId, Name }) => ({
      name: Name,
      carriersId: CarrierId,
    }));
  }

  function convertQuotes(Quotes) {
    return Quotes.map(({ MinPrice, OutboundLeg, InboundLeg }) => ({
      price: MinPrice,
      departureDate: OutboundLeg.DepartureDate,
      returnDate: InboundLeg.DepartureDate,
    }));
  }

  return {
    places: convertPlaces(Places),
    carriers: convertCarriers(Carriers),
    quotes: convertQuotes(Quotes),
  };
}
