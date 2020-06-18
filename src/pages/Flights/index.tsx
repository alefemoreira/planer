import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import FlightComponent from "../../components/FlightComponent";

import logo from "../../assets/logo.svg";

import "./styles.css";

const Flights: React.FC = () => {
  return (
    <div id="page-flights">
      <header>
        <img src={logo} alt="Planer" height="48px" />
        <div className="buttons">
          <Link id="create-flight" to="/create-flight">
            Cadastrar voo
          </Link>
          <Link id="home" to="/">
            <FiHome />
          </Link>
        </div>
      </header>

      <h1>Voos</h1>

      <ul>
        <li>
          <FlightComponent />
        </li>
        <li>
          <FlightComponent />
        </li>
        <li>
          <FlightComponent />
        </li>
      </ul>
    </div>
  );
};

export default Flights;
