import React from "react";
import RocketImg from "./RocketImg";
import Footer from "./Footer";
import NavBar from "./NavBar";
import RocketItem from "./RocketItem";

function Home() {
  return (
    <div>
      <NavBar />
      <RocketImg />
      <Footer />
      {/* <RocketItem /> */}
    </div>
  );
}

export default Home;
