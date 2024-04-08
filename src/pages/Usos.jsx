import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { CgSmartphoneChip } from "react-icons/cg";
import { IoShieldHalfOutline, IoHammerOutline } from "react-icons/io5";
import { BsMoonStars, BsHandThumbsUp  } from "react-icons/bs";



function Usos(){
    return(
        <>
        
        <div className="usos__contenedor">
            <div className="usos__div">
        <div className="usos__box--azul">
            <h3 className="usos__h3a">{<TfiEmail />}</h3>
            <h4 className="usos__h4">Funciona con Gmail, iCloud e IMAP</h4>
        </div>

        <div className="usos__box--rosa">
            <h3 className="usos__h3r">{<CgSmartphoneChip />}</h3>
            <h4 className="usos__h4">Todo el procesamiento en su dispositivo</h4>
        </div>

        <div className="usos__box--amarillo">
            <h3 className="usos__h3am">{<IoShieldHalfOutline />}</h3>
            <h4 className="usos__h4">Asegura todos tus datos</h4>
        </div>

        <div className="usos__box--negro">
            <h3 className="usos__h3n">{<BsMoonStars />}</h3>
            <h4 className="usos__h4">Opción de modo nocturno</h4>
        </div>

        <div className="usos__box--violeta">
            <h3 className="usos__h3v">{<BsHandThumbsUp />}</h3>
            <h4 className="usos__h4">De uso gratis, salvo funciones avanzadas</h4>
        </div>

        <div className="usos__box--blanca">
            <h3 className="usos__h3b">{<IoHammerOutline />}</h3>
            <h4 className="usos__h4">Realizado por desarrolladores independientes</h4>
        </div>
        </div>
        </div>
        </>
    )
}
export default Usos;

