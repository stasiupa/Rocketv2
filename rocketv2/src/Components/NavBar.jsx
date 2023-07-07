import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  const [rockets, setRocket] = useState([]);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((response) => response.json())
      .then((rockets) => {
        setRocket(rockets);
        // console.log(rocket);
      });
  }, []);

  return (
    <nav className="navbar">
      {rockets.map((item) => (
        <ul key={item.rocket_id} className="navbar-list">
          <li className="navbar-item">
            <Link className="navbar-link" to={`/rocket/${item.rocket_id}`}>
              {item.rocket_name}
            </Link>
          </li>
        </ul>
      ))}
    </nav>
  );
}

export default NavBar;
