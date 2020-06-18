import { FlightsState, Flight, FlightsTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: FlightsState = {
  editFlight: "",
  newFlight: {} as Flight,
  data: [
    {
      id: "789acb",
      datatime: "2020-05-18T09:30:00",
      origin: {
        country: "Brazil",
        state: "Paraíba",
        city: "Santa Rita",
        cep: "58300-000",
      },
      destiny: {
        country: "Brazil",
        state: "Pernambuco",
        city: "Recife",
        cep: "50000-000",
      },
    },
    {
      id: "A789cb",
      datatime: "2020-05-18T10:00:00",
      origin: {
        country: "Brazil",
        state: "Pernambuco",
        city: "Recife",
        cep: "50000-000",
      },
      destiny: {
        country: "Brazil",
        state: "Paraíba",
        city: "Santa Rita",
        cep: "58300-000",
      },
    },
    {
      id: "C789cb",
      datatime: "2020-05-19T10:30:00",
      origin: {
        country: "Brazil",
        state: "Pernambuco",
        city: "Recife",
        cep: "50000-000",
      },
      destiny: {
        country: "Brazil",
        state: "Paraíba",
        city: "Santa Rita",
        cep: "58300-000",
      },
    },
  ],
};

const reducer: Reducer<FlightsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FlightsTypes.LOAD_FLIGHTS:
      return { ...state, data: action.data };
    case FlightsTypes.EDIT_FLIGHTS:
      return { ...state, editFlight: action.id };
    case FlightsTypes.ADD_FLIGHTS:
      return { ...state, newFlight: action.newFlight };
    default:
      return state;
  }
};

export default reducer;
