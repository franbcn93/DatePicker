import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReservasProvider from "./components/ReservasContext";
import { Resultado } from "./components/Resultado";
import { Map } from "./components/Map";
import { Location } from "./components/Location";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div>
      {/* <MyComponent /> */}
      <ReservasProvider>
        <Resultado />
      </ReservasProvider>
      <Location />
      <Map />
    </div>
  );
}

export default App;
