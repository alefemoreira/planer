import { action } from "typesafe-actions";
import { FlightsTypes, Flight } from "./types";

export const loadFlights = (data: Flight[]) =>
  action(FlightsTypes.LOAD_FLIGHTS, { data });

export const editFlights = (id: string) =>
  action(FlightsTypes.EDIT_FLIGHTS, id);

export const addFlights = (newFlight: Flight) =>
  action(FlightsTypes.ADD_FLIGHTS, newFlight);
