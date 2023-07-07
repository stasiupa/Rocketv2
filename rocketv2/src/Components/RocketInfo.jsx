import React, { useEffect, useState } from "react";
import "./RocketInfo.css";

function RocketInfo() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Rocket name</th>
                <th>Description</th>
                <th>Mass [kg]</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td> {item.rocket_name}</td>
                  <td> {item.description}</td>
                  <td> {item.mass.kg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RocketInfo;
