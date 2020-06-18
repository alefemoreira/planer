import React from "react";
import { useSelector, Provider } from "react-redux";

import store, { ApplicationState } from "../../store";
import FlightComponent from "../FlightComponent";
import "./styles.css";

const FlightList: React.FC = () => {
  const flights = useSelector((state: ApplicationState) => state.flights.data);

  return (
    <div id="compoment-flight-list">
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            <Provider store={store}>
              <FlightComponent data={flight} />
            </Provider>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
