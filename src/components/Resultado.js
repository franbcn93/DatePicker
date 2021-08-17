import React, { useContext } from "react";
import { ReservasContext } from "./ReservasContext";

export const Resultado = () => {
  const { checkInDate, checkOutDate } = useContext(ReservasContext);

  return (
    <div>
      <h2>
        Esta es el resultado obtenido desde otro componente usando el
        useContext.
      </h2>
      {/* checkInDate:   Salida desde otro componente usando useContext */}
      {checkInDate ? (
        <h3>Check-in-Date: {checkInDate.toString().substr(0, 15)} </h3>
      ) : null}
      {/* checkOutDate: Salida desde otro componente usando useContext */}
      {checkOutDate ? (
        <h3>Check-out-Date: {checkOutDate.toString().substr(0, 15)}</h3>
      ) : null}
      <hr></hr>
    </div>
  );
};
