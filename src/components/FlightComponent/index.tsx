import React, { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

import "./styles.css";

const Flight: React.FC = () => {
  const history = useHistory();

  function handleEditButton(event: FormEvent) {
    event.preventDefault();

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
          <strong>789acb</strong>
        </div>
        <div id="flight-date">
          <p>Data do voo</p>
          <strong>31/12/2020</strong>
        </div>
      </div>
      <div className="column">
        <div id="flight-time">
          <p>Hora do voo</p>
          <strong>09:30</strong>
        </div>
      </div>

      <div className="column">
        <div id="country-origin">
          <p>País de origem</p>
          <strong>Brazil</strong>
        </div>
        <div id="city-origin">
          <p>Cidade do origem</p>
          <strong>Santa Rita</strong>
        </div>
      </div>
      <div className="column">
        <div id="uf-origin">
          <p>Estado origem</p>
          <strong>Paraíba</strong>
        </div>
        <div id="cep-origin">
          <p>CEP do origem</p>
          <strong>58300-300</strong>
        </div>
      </div>

      <div className="column">
        <div id="country-destiny">
          <p>País de destino</p>
          <strong>Brazil</strong>
        </div>
        <div id="city-destiny">
          <p>Cidade do destino</p>
          <strong>Santa Rita</strong>
        </div>
      </div>
      <div className="column">
        <div id="uf-destiny">
          <p>Estado destino</p>
          <strong>Paraíba</strong>
        </div>
        <div id="cep-destiny">
          <p>CEP do destino</p>
          <strong>58300-300</strong>
        </div>
      </div>
    </div>
  );
};

export default Flight;
