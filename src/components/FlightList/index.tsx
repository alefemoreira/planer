import React from "react";
import { connect, Provider, useSelector } from "react-redux";

import store, { ApplicationState } from "../../store";
import { Flight } from "../../store/ducks/flights/types";
import FlightComponent from "../FlightComponent";
import "./styles.css";

interface StateProps {
  flights: Flight[];
}

interface DispatchProps {}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

const FlightList: React.FC<Props> = (props) => {
  const flights = useSelector((state: ApplicationState) => state.flights.data);

  return (
    <div id="compoment-flight-list">
      <ul>
        {flights.map((flight) => (
          <li
            key={flight.id}
            onClick={() => {
              console.log(props.flights);
            }}
          >
            <Provider store={store}>
              <FlightComponent data={flight} />
            </Provider>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  flights: state.flights.data,
});

/*const mapDispacthToProps = (dispatch: Dispatch) => {
  bindActionCreators(FlightsActions, dispatch);
};*/

export default connect(mapStateToProps)(FlightList);
