import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Mensajes from './pages/Mensajes'
 import Archivos from './pages/Archivos';
import Revision from './pages/Revision';
import EnviarMensaje from './pages/EnviarMensaje';
import Usos from './pages/Usos';
import './css/Style.css';



ReactDOM.createRoot(document.getElementById('root')).render(
<Router>
<Routes>

  <Route path='/' element={<Inicio/>}/>
  <Route path='/mensajes' element={localStorage.getItem('usuario')== null?<></>:<Mensajes/>}/>
  <Route path='/archivo' element={localStorage.getItem('usuario')== null?<></>:<Archivos/>}/> 
  <Route path='/revision' element={localStorage.getItem('usuario')== null?<></>:<Revision/>}/>
  <Route path='/enviar' element={localStorage.getItem('usuario')== null?<></>:<EnviarMensaje/>}/>
  <Route path='/usos' element={localStorage.getItem('usuario')== null?<></>:<Usos/>}/>
 
</Routes>
 </Router>
)
