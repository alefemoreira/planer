import { createStore, Store } from "redux";
import { FlightsState } from "./ducks/flights/types";

import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  flights: FlightsState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
