import { call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { loadFlights } from "./actions";

export function* load() {
  try {
    const response = yield call(api.get, "flights");

    yield put(loadFlights(response.data));
  } catch (err) {
    alert("Error");
  }
}
