import React from "react";
import PropTypes from 'prop-types';

const SecondsCounter = (props) => {
  const { seconds } = props;

  // CALCULA LAS UNIDADES DE TIEMPO (HORAS, MINUTOS Y SEGUNDOS)
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // FORMATEA LAS UNIDADES DE TIEMPO EN DOS DÍGITOS CON CEROS A LA IZQUIERDA SI ES NECESARIO
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return (
    <div className="bigCounter">
      <div className="reloj">
        <i className="bi bi-clock"></i>
      </div>
      <div className="hora1">{formattedHours[0]}</div>
      <div className="hora2">{formattedHours[1]}</div>
      <div className="min1">{formattedMinutes[0]}</div>
      <div className="min2">{formattedMinutes[1]}</div>
      <div className="sec1">{formattedSeconds[0]}</div>
      <div className="sec2">{formattedSeconds[1]}</div>
    </div>
  );
};

//DEFINIR Y VALIDAR LAS PROPIEDADESS (PROPS)  PARA SecondsCounter!!!!!!!!
SecondsCounter.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;