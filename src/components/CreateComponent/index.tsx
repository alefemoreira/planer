import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import crypto from "crypto";

import { FlightsTypes, Flight } from "../../store/ducks/flights/types";
import { ApplicationState } from "../../store/";
import timeIsAvailable from "../../utils/timeIsAvailable";
import equalDestinations from "../../utils/equalDestinations";
import "./styles.css";

const CreateComponent: React.FC = () => {
  const flights = useSelector((state: ApplicationState) => state.flights.data);
  const dispatch = useDispatch();

  const [date, setDate] = useState({
    date: "",
    time: "",
  });
  const [origin, setOrigin] = useState({
    country: "",
    state: "",
    city: "",
    cep: "",
  });
  const [destiny, setDestiny] = useState({
    country: "",
    state: "",
    city: "",
    cep: "",
  });

  function handleDateChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setDate({ ...date, [name]: value });
  }

  function handleOriginChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setOrigin({ ...origin, [name]: value });
  }

  function handleDestinyChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setDestiny({ ...destiny, [name]: value });
  }

  function hadleSubmit(event: FormEvent) {
    // event.preventDefault();
    const verifications = flights.map((flight) => {
      if (flight.datatime.split("T")[0] === date.date) {
        if (equalDestinations(destiny, flight.destiny)) {
          alert("Voo já existe para esse destino neste dia");
          return false;
        }

        if (!timeIsAvailable(`${date.date}T${date.time}`, flight.datatime)) {
          alert("Voo muito próximo de outro");
          return false;
        }
      }
      return true;
    });

    if (verifications.indexOf(false) !== undefined) {
      return;
    }

    dispatch({
      type: FlightsTypes.ADD_FLIGHTS,
      newFlight: {
        id: crypto.randomBytes(3).toString("HEX"),
        datatime: `${date.date}T${date.time}`,
        origin: {
          country: origin.country,
          state: origin.state,
          city: origin.city,
          cep: origin.cep,
        },
        destiny: {
          country: destiny.country,
          state: destiny.state,
          city: destiny.city,
          cep: destiny.cep,
        },
      } as Flight,
    });

    console.log("foi");
    alert("Success");
  }

  return (
    <form onSubmit={hadleSubmit}>
      <h1>Cadastro de voo</h1>
      <p>Todos os campos são obrigatórios</p>

      <fieldset>
        <legend>
          <h2>Data e Hora</h2>
        </legend>

        <div className="field-group">
          <div className="field">
            <label htmlFor="date">Data</label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={handleDateChange}
              required={true}
            />
          </div>

          <div className="field">
            <label htmlFor="time">Hora</label>
            <div>
              <input
                type="time"
                name="time"
                id="time"
                onChange={handleDateChange}
                required={true}
              />
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>
          <h2>Orígem</h2>
        </legend>

        <div className="field-group">
          <div className="field">
            <label htmlFor="country">País</label>
            <input
              type="text"
              name="country"
              id="country"
              onChange={handleOriginChange}
              required={true}
            />
          </div>
          <div className="field">
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              name="cep"
              id="cep"
              onChange={handleOriginChange}
              required={true}
            />
          </div>
        </div>

        <div className="field-group">
          <div className="field">
            <label htmlFor="state">Estado</label>
            <input
              type="text"
              name="state"
              id="state"
              onChange={handleOriginChange}
              required={true}
            />
          </div>
          <div className="field">
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={handleOriginChange}
              required={true}
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>
          <h2>Destino</h2>
        </legend>

        <div className="field-group">
          <div className="field">
            <label htmlFor="country">País</label>
            <input
              type="text"
              name="country"
              id="country"
              onChange={handleDestinyChange}
              required={true}
            />
          </div>
          <div className="field">
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              name="cep"
              id="cep"
              onChange={handleDestinyChange}
              required={true}
            />
          </div>
        </div>

        <div className="field-group">
          <div className="field">
            <label htmlFor="state">Estado</label>
            <input
              type="text"
              name="state"
              id="state"
              onChange={handleDestinyChange}
              required={true}
            />
          </div>
          <div className="field">
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={handleDestinyChange}
              required={true}
            />
          </div>
        </div>
      </fieldset>
      <button type="submit">Cadastrar voo</button>
    </form>
  );
};

export default CreateComponent;
