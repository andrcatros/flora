import React from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.scss";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import AllPlants from "./AllPlants";

import data from "../data.json";

function App() {
  console.log(data[0].name);
  return (
    <div className="App grid">
      <Navbar />
      <p>This is a placeholder for the App component</p>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/all-plants">
          <AllPlants data={data} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
