import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import CreateFlight from "./pages/CreateFlight";
import Flights from "./pages/Flights";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreateFlight} path="/create-flight" exact />
      <Route component={Flights} path="/flights" exact />
    </BrowserRouter>
  );
};

export default Routes;
