import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import RocketItem from "./Components/RocketItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rocket/:rocket_id" element={<RocketItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
