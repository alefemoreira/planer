import React, { useState, FormEvent, ChangeEvent } from "react";
import { useSelector } from "react-redux";

import "./styles.css";
import { ApplicationState } from "../../store";

const EditComponent: React.FC = () => {
  const edit = useSelector(
    (state: ApplicationState) => state.flights.editFlight
  );

  const flight = useSelector(
    (state: ApplicationState) =>
      state.flights.data.filter((flight) => flight.id === edit)[0]
  );

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
    event.preventDefault();
  }
  return (
    <form onSubmit={hadleSubmit}>
      <h1>Edição de voo</h1>
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
              defaultValue={flight.datatime.slice(0, 10)}
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
                defaultValue={flight.datatime.slice(11, 16)}
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
              defaultValue={flight.origin.country}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              name="cep"
              id="cep"
              onChange={handleOriginChange}
              defaultValue={flight.origin.cep}
              required
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
              defaultValue={flight.origin.state}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={handleOriginChange}
              defaultValue={flight.origin.city}
              required
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
              defaultValue={flight.destiny.country}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              name="cep"
              id="cep"
              onChange={handleDestinyChange}
              defaultValue={flight.destiny.cep}
              required
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
              defaultValue={flight.destiny.state}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={handleDestinyChange}
              defaultValue={flight.destiny.city}
              required
            />
          </div>
        </div>
      </fieldset>
      <button type="submit">Editar voo</button>
    </form>
  );
};

export default EditComponent;
