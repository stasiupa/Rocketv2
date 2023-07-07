import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RocketImg from "./RocketImg";

function RocketItem() {
  const [rocket, setRocket] = useState();
  const { rocket_id } = useParams();
  // console.log(params);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/rockets/${rocket_id}`)
      .then((response) => response.json())
      .then((data) => {
        setRocket(data);
        console.log(data);
      });
  }, [rocket_id]);
  return (
    <div>
      {rocket ? (
        <div>
          <h2>{rocket.rocket_name}</h2>
          <p>{rocket.description}</p>
          {/* <p>Mass [kg]: {rocket.mass.kg}</p> */}
          <RocketImg image={rocket?.flickr_images[0]} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RocketItem;
