import Loguin from './tools/Loguin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormNuevoExpte from './tools/formNuevoExpte';
import Edit from './tools/Edit';
import GeneraCaratula from './tools/generaCaratula';
import EditaExpediente from './tools/EditaExpediente';
import ConsultaExpediente from './tools/ConsultaExpediente';
import QRscanner from './modulos/QRscanner'
import ModuloUsuarios from './modulos/moduloUsuarios';
import CambiaContrasena from './modulos/CambiaContrasena';
import Ingreso2024 from './tools/ingreso2024';
import ReIngreso2024 from './tools/ReIngreso2024';
import DevuelveLegajoInscripto from '../src/modulos/DevuelveLegajoInscripto';
import Cadetes from '../src/cadetes/Cadetes'
import Certificados from './certificados/Certificados';
import GeneraCertificado from './certificados/GeneraCertificado'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loguin ></Loguin>}/>
          <Route path='/usuarioLogueado' element={<Edit />}/>
          <Route path='/imprime' element={<GeneraCaratula />}/>
          <Route path='/nuevo' element={<FormNuevoExpte />}/>
          <Route path='/editaExpediente' element={<EditaExpediente />}/>
          <Route path='/consultaExpediente' element={<ConsultaExpediente />}/>
          <Route path='/LectorQr' element={<QRscanner />}/>
          <Route path='/usuarios' element={<ModuloUsuarios />}/>
          <Route path='/cambioContrasena' element={<CambiaContrasena />}/>
          <Route path='/ingreso2024' element={<Ingreso2024 />}/>
          <Route path='/reingreso2024' element={<ReIngreso2024 />}/>
          <Route path='/Postulante' element={<DevuelveLegajoInscripto />}/>
          <Route path='/Cadetes' element={<Cadetes />}/>
          <Route path='/Certificados' element={<Certificados />}/>
          <Route path='/imprimeCertificado' element={<GeneraCertificado />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
