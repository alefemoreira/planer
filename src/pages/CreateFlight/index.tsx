import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import "./styles.css";

const CreateFlight: React.FC = () => {
  return (
    <div id="page-create-flight">
      <header>
        <img src={logo} alt="Planer" height="48px" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para Home
        </Link>
      </header>

      <form>
        <h1>Cadastro de voo</h1>

        <fieldset>
          <legend>
            <h2>Data e Hora</h2>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="year">Ano</label>
              <input type="number" name="year" id="year" placeholder="YYYY" />
            </div>
            <div className="field">
              <label htmlFor="month">Mês</label>
              <input type="number" name="month" id="month" placeholder="MM" />
            </div>
            <div className="field">
              <label htmlFor="day">Dia</label>
              <input type="number" name="day" id="day" placeholder="DD" />
            </div>
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="hour">Hora</label>
              <div>
                <input
                  type="number"
                  name="hour"
                  id="hour"
                  min="0"
                  max="23"
                  placeholder="hh"
                />
                {/* <p>:</p> */}
              </div>
            </div>
            <div className="field">
              <label htmlFor="minutes">Minutos</label>
              <input
                type="number"
                name="minutes"
                id="minutes"
                min="0"
                max="59"
                placeholder="mm"
              />
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
              <input type="text" name="country" id="country" />
            </div>
            <div className="field">
              <label htmlFor="cep">CEP</label>
              <input type="text" name="cep" id="cep" />
            </div>
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">UF</label>
              <input type="text" name="uf" id="uf" />
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <input type="text" name="city" id="city" />
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
              <input type="text" name="country" id="country" />
            </div>
            <div className="field">
              <label htmlFor="cep">CEP</label>
              <input type="text" name="cep" id="cep" />
            </div>
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">UF</label>
              <input type="text" name="uf" id="uf" />
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <input type="text" name="city" id="city" />
            </div>
          </div>
        </fieldset>
        <button type="submit">Cadastrar voo</button>
      </form>
    </div>
  );
};

export default CreateFlight;
