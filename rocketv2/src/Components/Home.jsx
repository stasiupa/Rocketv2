import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

import "./Home.css";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="home-page">
        Wybierz w nawigacji rakietę o której chcesz się dowiedzieć więcej.
      </div>
      <Footer />
    </div>
  );
}

export default Home;
