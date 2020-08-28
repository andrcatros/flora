import React from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.scss";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  return (
    <div className="App grid">
      <Navbar />
      <p>This is a placeholder for the App component</p>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
