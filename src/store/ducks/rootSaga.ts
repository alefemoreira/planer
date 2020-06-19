import { all, takeLatest } from "redux-saga/effects";

import { FlightsTypes } from "./flights/types";
import { load } from "./flights/sagas";

export default function* rootSaga() {
  return yield all([takeLatest(FlightsTypes.LOAD_FLIGHTS, load)]);
}
