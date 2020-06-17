import React from "react";
import { Link } from "react-router-dom";
import { FiEye, FiLogIn } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import "./styles.css";

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Planer" height="48px" />
        </header>
        <main>
          <h1>O seu gerenciador de voos, simples e elegante</h1>
          <Link to="/flights">
            <span>
              <FiEye />
            </span>
            <strong>Ver voos</strong>
          </Link>

          <Link to="/create-flight">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastrar novo voo</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
