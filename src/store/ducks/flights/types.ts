export enum FlightsTypes { //Action Types
  LOAD_FLIGHTS = "@flights/LOAD_FLIGHTS",
  EDIT_FLIGHTS = "@flights/EDIT_FLIGHTS",
  ADD_FLIGHTS = "@flights/ADD_FLIGHTS",
}

//Data type
export interface Flight {
  id: string;
  datatime: string;
  origin: {
    country: string;
    state: string;
    city: string;
    cep: string;
  };
  destiny: {
    country: string;
    state: string;
    city: string;
    cep: string;
  };
}

// State Type
export interface FlightsState {
  readonly editFlight: string;
  readonly newFlight: Flight;
  readonly data: Flight[];
}
