import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Provider } from "react-redux";

import store from "../../store";
import CreateComponent from "../../components/CreateComponent";
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

      <Provider store={store}>
        <CreateComponent />
      </Provider>
    </div>
  );
};

export default CreateFlight;
