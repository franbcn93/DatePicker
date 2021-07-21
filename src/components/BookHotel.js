import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

// Cambiamos el idioma a Español
{
  moment.lang("es", {
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
}

function fecha(escogido, formato1, formato2, formato3, formato4) {
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

export const BookHotel = () => {
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
    <div className="divBooks">
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
      {checkInDate && checkOutDate && (
        <div className="summary">
          <p>
            Has hecho una reserva desde{" "}
            {fecha(checkInDate, "dddd", "D", "MMMM", "yyyy")}
            {", hasta el "}
            {fecha(checkOutDate, "dddd", "D", "MMMM", "yyyy")}.
          </p>
        </div>
      )}
    </div>
  );
};
