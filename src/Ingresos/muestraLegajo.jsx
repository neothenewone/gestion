import React from 'react';
import './generaLegajo.css';
import Cookies from 'universal-cookie';
import { PDFViewer} from '@react-pdf/renderer';
import Legajo from './generaLegajo';
import obtieneDatosPostulante from './obtieneDatosPostulante';


function MuestraLegajo() {
 const cookies=new Cookies();
  if(!cookies.get('id',{path:"/"})){

    window.location.href='./';
}
    
      return (
        <>

<div>
      <PDFViewer showToolbar="false" style={{width:"100%",height:"100vh"}} >

        <Legajo />

      </PDFViewer>

      </div>
      
      </>
    );
  }
export default MuestraLegajo



