import React from 'react';
import { BsReply } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaSignal } from "react-icons/fa";
import { CiWifiOn } from "react-icons/ci";
import { TiBatteryCharge } from "react-icons/ti";

function EnviarMensaje(){
const{VITE_ENVIAR}= import.meta.env
    return(
        <>
       <div className='enviar__contenedor'>

       <div className='enviar__div'>
                <h2 className='enviar__icon'>{<BsReply />}</h2>
               <h2 className='enviar__h2'>Responda al instante</h2>
                <p className='enviar__p'>Envie una respuesta rápida sin salir del aplicacion</p>
            </div>
        <div className='form__contenedor'>
{/*-------Esto elemento comparten la misma clase que la sesión anterior------------------  */}
        <div className="revision__uno">
            <p className="revision__uno--p">9:41</p>
            <p className="revision__uno--p">{<FaSignal/>} {<CiWifiOn/>} {<TiBatteryCharge/>}</p>
          </div>
          <div className="revision__boxes--cero"></div>
{/* ----------------------------------------------------------------------------- */}
            <form action={VITE_ENVIAR} method="post" className="form">
                <div className='form__div'>
                     <p className='form__p1'>Cancelar</p>
                     <p className='form__p2'>Responder</p>
                </div>
                <button type='submit' className='form__button'>{<FiSend />}</button>
                <label htmlFor="destino"className="form__label" ><BsReply />  Para:  </label>
                <input type="text" name="destinatario" id="destino" className="form__input" />

                <label htmlFor="tema" className="form__label">Asunto:</label>
                <input type="text" name="asunto" id="tema" className="form__input" />

                <textarea name="mensaje" id="desc" cols="30" rows="10" className="form__texta" placeholder='|Tu respuesta'></textarea>
            </form>
      
        </div>
          
        </div>
        </>
    )
}
export default EnviarMensaje;