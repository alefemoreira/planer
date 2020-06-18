import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Provider } from "react-redux";

import EditComponent from "../../components/EditComponent";
import store from "../../store";
import logo from "../../assets/logo.svg";
import "./styles.css";

const EditFlight: React.FC = () => {
  return (
    <div id="page-edit-flight">
      <header>
        <img src={logo} alt="Planer" height="48px" />
        <Link to="/flights">
          <FiArrowLeft />
          Ver voos
        </Link>
      </header>

      <Provider store={store}>
        <EditComponent />
      </Provider>
    </div>
  );
};

export default EditFlight;
