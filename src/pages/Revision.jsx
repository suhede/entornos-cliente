import React from "react";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { TbCircleLetterC } from "react-icons/tb";
import { FcBusinessman } from "react-icons/fc";
import { FaSignal } from "react-icons/fa";
import { CiWifiOn } from "react-icons/ci";
import { TiBatteryCharge } from "react-icons/ti";

function Revision() {
  return (
    <>
    <section className="cuarta">

    <div className="revision__contenedor">

        <div className="revision__div">
        <div className="revision__uno">
            <p className="revision__uno--p">9:41</p>
            <p className="revision__uno--p">{<FaSignal/>} {<CiWifiOn/>} {<TiBatteryCharge/>}</p>
          </div>
        <div className="revision__boxes--cero"></div>
        <div className="revision__boxes">
            <div className="revision__box--uno">
              <h3 className="revision__h3">Hecho</h3>
              <h4 className="revision__h4">Siguiendo el último mensaje</h4>
            </div>

            <div className="revision__box">
              <p className="revision__icon">{<TbCircleLetterC />}</p>
              <div>
                <p className="revision__p">
                  {" "}
                  Camila Orlando: <span className="revision__span">martes 6 Sept, 10:21 AM</span>
                </p>
                <p className="revision__p">Para mi</p>
              </div>
            </div>

            <div className="revision__box">
              <p className="revision__icon">{<FcBusinessman />}</p>
              <div>
                <p className="revision__p">
                  {" "}
                  Yo: <span className="revision__span">Lunes 5, 3:44 PM</span>
                </p>
                <p className="revision__p">Para Camila</p>
              </div>
              
        </div>
{/* --------------------------------------------------------------------- */}
            <div className=" revision__box--mensaje">
             <p className="revision__icon">{<TbCircleLetterC />}</p>
              <div>
                <h3 className="revision__h3--mensaje">Camila Orlando <span className="revision__span">hace 6 minutos</span></h3>
                <p className="revision__p">Para mi</p>
              </div>  
            </div>

            <p className="revision__p--mensaje">
              Hola Robert; <br />
              Siento que tenga que volver a reestructurar todo los gastos de tu
              departamento nueva vez, pero por orden directa de la dirección no
              podemos pasarnos del presupuesto aprobado.
            </p>

        </div>
        </div>   
{/* ---------------------------------------------------------- */}
          <div className="revision__box--text">
            <h2 className="revision__icon--text">{<CgArrowsExpandLeft />} </h2>
            <h2 className="revision__h2--text">Toque para expandir la pantalla</h2>
            <p className="revision__p--text">
              {" "}
              Al abrir el mensaje delante podrá ver todas las conversaciones
              anteriores. </p>
          </div>

    </div>
</section>
    </>
  );
}
export default Revision;
