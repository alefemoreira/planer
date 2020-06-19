import { call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { loadFlights } from "./actions";

export function* load() {
  try {
    console.log("hello");
    const response = yield call(api.get, "flights");
    console.log(response.data);

    yield put(loadFlights(response.data));
  } catch (err) {
    console.log("error");
    alert("Error");
  }
}
