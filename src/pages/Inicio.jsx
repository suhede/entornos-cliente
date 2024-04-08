import React from "react";
import { AiOutlineApple } from "react-icons/ai";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { BsArchive } from "react-icons/bs";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Mensajes from "./Mensajes";
import Archivos from "./Archivos";
import Revision from "./Revision";
import EnviarMensaje from "./EnviarMensaje";
import Usos from "./Usos";
import Comentarios from "./Comentarios";

function Inicio() {
  return (
    <main className="main">
      <section className="primera">
        <div className="inicio__contenedor">
          <div className="inicio__box">
            <h2 className="inicio__icon1">{<HiOutlineInboxArrowDown />}</h2>
            <h2 className="inicio__h2">TEXTEADO.NOW</h2>
            <p className="inicio__p">
              Recibe y envia tus mensajes de la forma más sencilla y segura
            </p>
            <div className="inicio__div">
              <div>
                <p className="inicio__icon">{<AiOutlineApple />}</p>
              </div>
              <div>
                <p className="inicio__p1">Descargar en el</p>
                <p className="inicio__p2">App Store</p>
              </div>
            </div>
          </div>
          <div className="page__mensajes">
            <Mensajes />
          </div>
        </div>
      </section>
{/*--- ----------------------segunda sesion--------------------------------------------------------- */}
      <section className="segunda sesion">
        <div className="segundo__contenedor">
      
          <div className="segundo__boxes">
            <div className="segundo__box"></div>
            <div className="segundo__box--uno">
              <h3 className="mensaje__h3">Camila Orlando</h3>
              <h4 className="mensaje__h4">Robert Cavalli</h4>
              <h4 className="mensaje__h4">Presentación de nuevos productos</h4>
              <p className="mensaje__p">
                Buenos Dias; <br />
                El presupuesto para los proximos eventos ha sido aprobado con
                varios cambios que afectan a varios departamentos de la empresa.
              </p>
            </div>
            <div className="segundo__box--dos"></div>
            <div className="segundo__box--tres"></div>
            <div className="segundo__icons">
              <p className="segundo__iuno">{<BsArchive />}</p>
              <p className="segundo__p">3 restantes</p>
              <p className="segundo__idos">{<HiOutlineInboxArrowDown />}</p>
            </div>
            <p className="segundo__barra">___</p>
          </div>
          <div className="segundo__box--text">
            <h2 className="segundo__icon">{<FaArrowLeft />} </h2>
            <h2 className="segundo__box--h2">Arrastre a la izquierda para guardar</h2>
            <p className="inicio__p">
              {" "}
              Visualizará todos los mensajes sin leer.
            </p>
          </div>
        </div>
      </section> 
{/* --------------------------tercera sesión-------------------------------------------------------- */}
 <Archivos/>
{/* --------------------------cuarta sesión------------------------------------- */}
<Revision/>
{/* --------------------------quinta sesión------------------------------------------------ */}
<EnviarMensaje/>
{/* --------------------------sexta sesión-------------------------------------------------- */}
<Usos/>
{/* --------------------------septima sesión----------------------------------- */}
  <Comentarios/>  
      
        
    
    </main>
  );
}
export default Inicio;
