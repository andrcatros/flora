import React from "react";
import "../styles/App.scss";

import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App grid">
      <Navbar />
      <p>This is a placeholder for the App component</p>
      <Footer />
    </div>
  );
}

export default App;
