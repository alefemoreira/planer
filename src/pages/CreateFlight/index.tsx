import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import "./styles.css";

const CreateFlight: React.FC = () => {
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

    console.log(date);
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

    console.log(`${date.date}T${date.time}`);
    console.log(origin);
    console.log(destiny);
  }

  return (
    <div id="page-create-flight">
      <header>
        <img src={logo} alt="Planer" height="48px" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para Home
        </Link>
      </header>

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
    </div>
  );
};

export default CreateFlight;
