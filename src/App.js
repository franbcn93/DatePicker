import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BookHotel } from "./components/BookHotel";
import ReservasProvider from "./components/ReservasContext";
import { Resultado } from "./components/Resultado";

function App() {
  return (
    <div>
      <ReservasProvider>
        {/* <BookHotel /> */}
        <Resultado />
      </ReservasProvider>
    </div>
  );
}

export default App;
