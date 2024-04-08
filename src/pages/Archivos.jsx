import React from "react";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { BsArchive } from "react-icons/bs";
 function Archivos (){

     return(
        <>

<div className="tercer__contenedor">
          <div className="tercera__box--text">
            <h2 className="tercera__icon">{<FaArrowRight />} </h2>
            <h2 className="segundo__box--h2">Arrastre a la derecha</h2>
            <p className="inicio__p">
              {" "}
              Cree o personalice su propio flujo de trabajo.
            </p>
          </div>

          <div className="tercera__boxes">
            <div className="tercera__box--uno"></div>
            <div className="tercera__box--dos">
              <h3 className="mensaje__h3">Camila Orlando</h3>
              <h4 className="mensaje__h4">Robert Cavalli</h4>
              <h4 className="mensaje__h4">Presentación de nuevos productos</h4>
              <p className="mensaje__p">
                Buenos Dias; <br />
                El presupuesto para los proximos eventos ha sido aprobado con
                varios cambios que afectan a varios departamentos de la empresa.
              </p>
            </div>
            <div className="tercera__box--tres"></div>
            <div className="tercera__box--cuatro"></div>
            <div className="tercera__icons">
              <p className="tercera__iuno">{<BsArchive />}</p>
              <p className="tercera__p">3 restantes</p>
              <p className="tercera__idos">{<HiOutlineInboxArrowDown />}</p>
            </div>
            <p className="segundo__barra">___</p>
          </div>
        </div>
       
       
         </>
     );
     }
 export default Archivos;
