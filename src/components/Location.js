import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Location = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Coordinadas actuales</h1>
      <Button onClick={getLocation}>Obtener Localización</Button>

      {lat && <p style={{ paddingTop: "20px" }}>Latitud: {lat}</p>}
      {lng && <p>Longitud: {lng}</p>}
    </div>
  );
};
