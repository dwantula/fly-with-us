import apiClient from './apiClient';

function convertPlaces(Places) {
  return Places.reduce(
    (places, { PlaceId, SkyscannerCode }) => ({
      ...places,
      [PlaceId]: { name: SkyscannerCode },
    }),
    {},
  );
}

function convertCarriers(Carriers) {
  return Carriers.reduce(
    (carriers, { CarrierId, Name }) => ({
      ...carriers,
      [CarrierId]: { name: Name },
    }),
    {},
  );
}

function convertQuotes(Quotes) {
  return Quotes.map(({ MinPrice, OutboundLeg, InboundLeg }) => ({
    price: MinPrice,
    departureDate: OutboundLeg.DepartureDate,
    departurePlaceId: OutboundLeg.OriginId,
    departureCarrierId: OutboundLeg.CarrierIds[0],
    returnDate: InboundLeg.DepartureDate,
    returnPlaceId: InboundLeg.OriginId,
    returnCarrierId: InboundLeg.CarrierIds[0],
  }));
}

export async function fetchTravelQuotes(
  originPlace,
  destinationPlace,
  departureDate,
  dataOfReturn,
) {
  const response = await apiClient.get(
    `/browseroutes/v1.0/PL/PLN/PL/${originPlace}/${destinationPlace}/${departureDate}/${dataOfReturn}`,
  );

  const { Carriers, Places, Quotes } = response.data;

  return {
    places: convertPlaces(Places),
    carriers: convertCarriers(Carriers),
    quotes: convertQuotes(Quotes),
  };
}
