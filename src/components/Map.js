import React from "react";
import { useLayoutEffect, useState } from "react";

function useMediaQuery() {
  const [screenSize, setScreenSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateScreenSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
}

export const Map = () => {
  const [width] = useMediaQuery();
  const widthWithMargin = width - 40;
  const margen = width / 10;

  return (
    <div>
      <hr />
      <h1>Mapa de una ruta centrada, hecha en google.</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d759507.7609687325!2d1.1622046220910427!3d41.96104670751897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x12a4a33319ca95fd%3A0x624fe69852903abb!2sCarrer%20de%20Huelva%2C%2087%2C%2008020%20Barcelona%2C%20Espa%C3%B1a!3m2!1d41.4189393!2d2.1971707!4m5!1s0x12a5f52e989ef095%3A0x7c93ed778ea7f92!2sAndorra!3m2!1d42.506285!2d1.521801!5e0!3m2!1ses!2ses!4v1629105752155!5m2!1ses!2ses"
        width={widthWithMargin}
        height="450"
        style={{ marginBottom: "20px", marginLeft: "12px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};
