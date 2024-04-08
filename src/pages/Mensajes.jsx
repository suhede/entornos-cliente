import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { FaSignal } from "react-icons/fa";
import { CiWifiOn } from "react-icons/ci";
import { TiBatteryCharge } from "react-icons/ti";

function Mensajes() {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {

    const {VITE_MENSAJE} = import.meta.env;
    const controller = new AbortController();
    const options = {
      method: "Get",
      headers: { "Content-Type": "Application/json"},
      signal: controller.signal
    };

    fetch(VITE_MENSAJE,options)
      .then(res=>res.json())
      .then(data=> setMensajes(data.contenido))
      .catch(err => console.log(err))
      .finally(()=>controller.abort());
  }, []);

  return (
    <>
      <div className="mensaje__box">
        <div className="box__contenedor">
          <div className="uno">
            <p className="uno__p">9:41</p>
            <p className="uno__p">{<FaSignal/>} {<CiWifiOn/>} {<TiBatteryCharge/>}</p>
          </div>
            <div className="dos">
            <h2 className="dos__h2">Texteado</h2>
            <p className="dos__p">RobertCavalli@gmail.com</p>
            </div>
        </div>
        {mensajes.map(mensa=>
         <div key={mensa.id} className="mensaje__div">
         <h3 className="mensaje__h3">{mensa.remitente}</h3>
         <h4 className="mensaje__h4">{mensa.destinatario}</h4>
         <h4 className="mensaje__h4">{mensa.asunto}</h4>
         <p className="mensaje__p">{mensa.mensaje}</p>
         </div>
        
         )}
      </div>
    </>
  );
}
export default Mensajes;


