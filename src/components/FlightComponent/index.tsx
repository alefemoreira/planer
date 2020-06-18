import React, { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";

import { FlightsTypes, Flight } from "../../store/ducks/flights/types";
import "./styles.css";

interface Props {
  data: Flight;
}

const FlightComponent: React.FC<Props> = ({ data }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleEditButton(event: FormEvent) {
    event.preventDefault();

    dispatch({ type: FlightsTypes.EDIT_FLIGHTS, id: data.id });

    history.push("/edit-flight");
  }
  return (
    <div id="component-flight">
      <button onClick={handleEditButton}>
        <FiEdit />
      </button>
      <div className="column">
        <div id="flight-code">
          <p>Código do voo</p>
          <strong>{data.id}</strong>
        </div>
        <div id="flight-date">
          <p>Data do voo</p>
          <strong>{data.datatime.slice(0, 10)}</strong>
        </div>
      </div>
      <div className="column">
        <div id="flight-time">
          <p>Hora do voo</p>
          <strong>{data.datatime.slice(11, 16)}</strong>
        </div>
      </div>

      <div className="column">
        <div id="country-origin">
          <p>País de origem</p>
          <strong>{data.origin.country}</strong>
        </div>
        <div id="city-origin">
          <p>Cidade do origem</p>
          <strong>{data.origin.city}</strong>
        </div>
      </div>
      <div className="column">
        <div id="uf-origin">
          <p>Estado origem</p>
          <strong>{data.origin.state}</strong>
        </div>
        <div id="cep-origin">
          <p>CEP do origem</p>
          <strong>{data.origin.cep}</strong>
        </div>
      </div>

      <div className="column">
        <div id="country-destiny">
          <p>País de destino</p>
          <strong>{data.destiny.country}</strong>
        </div>
        <div id="city-destiny">
          <p>Cidade do destino</p>
          <strong>{data.destiny.city}</strong>
        </div>
      </div>
      <div className="column">
        <div id="uf-destiny">
          <p>Estado destino</p>
          <strong>{data.destiny.state}</strong>
        </div>
        <div id="cep-destiny">
          <p>CEP do destino</p>
          <strong>{data.destiny.cep}</strong>
        </div>
      </div>
    </div>
  );
};

export default FlightComponent;
