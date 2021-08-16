import React, { createContext, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

// Crear el context
export const ReservasContext = createContext();

function fecha(escogido, formato1, formato2, formato3, formato4) {
  // Cambiamos el idioma a Español
  moment.locale("es", {
    months:
      "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
        "_"
      ),
    monthsShort:
      "Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split("_"),
    weekdays: "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),
    weekdaysShort: "Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),
    weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_"),
  });

  const esc = moment(escogido);

  return (
    esc.format(formato1) +
    " " +
    esc.format(formato2) +
    " de " +
    esc.format(formato3) +
    " del " +
    esc.format(formato4)
  );
}

function diferenciaFechas(entrada, salida) {
  const date1 = new Date(entrada);
  const date2 = new Date(salida);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function formatoFecha(dia) {
  const fecha =
    dia.getDate() + "/" + (dia.getMonth() + 1) + "/" + dia.getFullYear();
  return fecha;
}

// Creamos el Provider
const ReservasProvider = (props) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  return (
    <ReservasContext.Provider value={{ checkInDate, checkOutDate }}>
      <div className="divBooks">
        <h1>Ejercicios de pruebas</h1>
        <h2>Simulacro de una reserva de un Hotel</h2>
        <div className="input-container">
          <div>
            <label>Check-in</label>
            <DatePicker
              selected={checkInDate}
              minDate={new Date()}
              onChange={handleCheckInDate}
            />
          </div>
          <div>
            <label>Check-out</label>
            <DatePicker
              selected={checkOutDate}
              minDate={checkInDate}
              onChange={handleCheckOutDate}
            />
          </div>
        </div>
        {checkInDate ? (
          <p>Fecha de entrada: {formatoFecha(checkInDate)}</p>
        ) : null}
        {checkOutDate ? (
          <p>Fecha de salida: {formatoFecha(checkOutDate)}</p>
        ) : null}

        {checkInDate && checkOutDate && (
          <div className="summary">
            <p>
              Has hecho una reserva desde{" "}
              {fecha(checkInDate, "dddd", "D", "MMMM", "yyyy")}
              {", hasta el "}
              {fecha(checkOutDate, "dddd", "D", "MMMM", "yyyy")}.
            </p>
            <p>
              {diferenciaFechas(
                checkInDate.getMonth() +
                  1 +
                  "/" +
                  checkInDate.getDate() +
                  "/" +
                  checkInDate.getFullYear(),
                checkOutDate.getMonth() +
                  1 +
                  "/" +
                  checkOutDate.getDate() +
                  "/" +
                  checkOutDate.getFullYear()
              )}{" "}
              días de diferencia entre las 2 fechas.
            </p>
          </div>
        )}
        <hr />
        {props.children}
      </div>
    </ReservasContext.Provider>
  );
};

export default ReservasProvider;
