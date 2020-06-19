import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { FlightsState } from "./ducks/flights/types";

import rootReducer from "./ducks/rootReducer";
// import rootSaga from "./ducks/rootSaga";
import { load } from "./ducks/flights/sagas";

export interface ApplicationState {
  flights: FlightsState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(load);

export default store;
