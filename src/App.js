import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BookHotel } from "./components/BookHotel";

function App() {
  return (
    <div>
      <h1>Ejercicios de pruebas</h1>
      <h2>Simulacro de una reserva de un Hotel</h2>
      <BookHotel />
      <hr />
    </div>
  );
}

export default App;
