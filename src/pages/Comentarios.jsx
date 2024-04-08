import React from "react";
import { FaStarHalfAlt, FaTwitter  } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { MdAlternateEmail, MdBookmarks,  MdMailOutline  } from "react-icons/md";

function Comentarios() {
  return (
    <>
      <div className="comentarios__contenedor">
        <h2 className="comentarios__h2">Reseñas sobre Texteado.now </h2>
        <div className="comentarios__div">
          <div className="comentarios__box">
            <p className="comentarios__p">
              Desde que uso esta aplicación, estoy más pendiente de mi correo
              electrónico que en anteriores años.
            </p>
            <div className="comentarios__vista1">
              <h5 className="comentarios__h5">{<FaStarHalfAlt />}</h5>
              <h5 className="comentarios__h5">Estrella Ardiente</h5>
            </div>
          </div>

          <div className="comentarios__box">
            <p className="comentarios__p">
              Si lo que busca es mantener tu bandeja de entrada limpia,
               Texteado.now para iOS y Android podría ser lo
              que buscas
            </p>
            <div className="comentarios__vista2">
            <h5 className="comentarios__h5">La Cuadra</h5>
            </div>
           
          </div>

          <div className="comentarios__box">
            <p className="comentarios__p">
              Texteado es la forma perfecta e incluso divertida, de mantener una
              bandeja de entrada cero.
            </p>
            <div className="comentarios__vista3">
            <h5 className="comentarios__h5">TecnoMac</h5>
            </div>
            
          </div>

          <div className="comentarios__box">
            <p className="comentarios__p">
              Esta App proporciona la ayuda necesaria para obtener su bandeja de
              entrada de nuevo sin lucha alguna.
            </p>
            <div className="comentarios__vista4">
              <h5 className="comentarios__h5">MundoTecno</h5>
              <h5 className="comentarios__h5">{<TbWorld />}</h5>
            </div>
          </div>

          <div className="comentarios__box">
            <p className="comentarios__p">
              Texteado.now es una mejora para aquellos que necesitan mantener
              sus bandejas de entrada limpias y organizado.
            </p>
            <div className="comentarios__vista5">
              <h5 className="comentarios__h5">{<MdAlternateEmail />}</h5>
              <h5 className="comentarios__h5">Cleaner mail</h5>
            </div>
          </div>

          <div className="comentarios__box">
            <p className="comentarios__p">
              Texteado.now es mi nueva app favorita de correo electrónico.
            </p>
            <div className="comentarios__vista6">
              <h5 className="comentarios__h5">{<MdBookmarks />}</h5>
              <h5 className="comentarios__h5">TecnoBooks</h5>
            </div>
          </div>
        </div>
        <div className="comentarios__final">
            <div className="comentarios__avisos">
            <p className="avisos__p">FAQ</p>
            <p className="avisos__p">Privacidad</p>
            <p className="avisos__p">Terminos de Uso</p>
            <p className="avisos__p">Seguridad</p>
            </div>
           <div className="comentarios__icons">
            <p className="avisos__p">{<MdMailOutline />}</p>
            <p className="avisos__p">{<FaTwitter />}</p>
           </div>
        </div>
      </div>
    </>
  );
}
export default Comentarios;
