export type User = {
  username: string;
  avatar: string;
  wallet: {
    balance: number;
    refillPreferences: {
      lastRefillAmount: number;
      method: string;
    };
  };
  city: City;
  savedLocations: SavedLocation[];
};

type Location = {
  coordinates: {
    x_long: number;
    y_lat: number;
  };
  city: City;
  adress: Adress;
  locationType: 'LOCATION_TYPE_GEOLOCATION' | 'LOCATION_TYPE_STATION' | 'LOCATION_TYPE_ADRESS';
};

type Station = Location & {
  city: City;
  adress: Adress;
  stationName: string;
};

type RoutePoint = Station | Location | SavedLocation;

type TransportType = "BUS" | "TRAIN" | "ROLLEY_BUS";

type Route = {
  start: RoutePoint;
  finish: RoutePoint;
  dateTime: Date;
  allowedTransportTypes: Array<TransportType>
};

type Adress = {
  city: City;
  streetName: string;
  houseNumber: number;
};

type SavedLocation = Location & {
  customName: string; //'home' | 'job' | etc
};

type City = {
  id: number;
  name: string;
  regionSymbol: string;
};
