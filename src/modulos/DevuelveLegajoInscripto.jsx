import React , { useState }from "react";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import ObtieneDatosCookies from '../tools/obtieneDatosCookiesUsuario';
import '../estilos/inscriptos.css'
import {useNavigate} from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import seteaPostulante from '../Ingresos/seteaCokiePostulante'

import Legajo from '../Ingresos/generaLegajo'
function DevuelveLegajoInscripto() {

  const[seleccionado,setSeleccionado]=useState(false)

  const [cargando, setCargando] = useState(false);
  const usuarioLoguead=ObtieneDatosCookies()

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({});
  const navitate = useNavigate();



  const onSubmit = async(parametroInscripto) => {
 
 
  try {
      
  const res= await axios.post("https://apps.isepsantafe.edu.ar/inscriptos/consulta/"+parametroInscripto.dni).then(x=>imprime(x.data)).then(resetForm())}
  catch{ alert("algo Fallo")}
  
  }
  
  const resetForm =()=>{
    document.getElementById("create-course-form").reset();
  }


const imprime=async(mirache)=>{
 setSeleccionado(mirache)
 seteaPostulante(mirache)

}
const volver=()=>
{
  navitate('/ingreso2024')
}
 return(
      <>

      <div className="grid-container">
      
        <div className="datosTotales">
       
        <h4>Menu de Impresión de Legajos ciclo 2024-2025</h4>

      </div>
      

      <div className="capturaPresentes">

      
     
      <form onSubmit={handleSubmit(onSubmit)} id="create-course-form">
    

      <input
            type="number"
            id="campo"
            placeholder="Ingrese el nro de DNI"
            {...register('dni', {
              required: true,
            })}
          />
          <div>
          <input className="btn btn-primary" type="submit"  value="Consultar"  style={{backgroundColor:"#257b0aa1"}}/>
          </div>
      


      </form>
      </div>
{!seleccionado?"":
<>
<button className="btn btn-danger" style={{width:"10%",alignItems:"right"}} onClick={()=>{setSeleccionado(null)}}>x</button>

<h2>Postulante</h2><h2>{seleccionado.nombres + " "+seleccionado.apellido}</h2>
<PDFDownloadLink document={<Legajo />} fileName={"Legajo de "+seleccionado.apellido}>
<input type="button" value="Guardar su legajo"  id="imprime"  />
 </PDFDownloadLink>

 </>
}
     
     </div>
     <div className="footer">
        <input style={{width:"100%"}} className="btn btn-warning" type="button" value="Volver" onClick={volver} />
        </div>
     </>
    )}export default DevuelveLegajoInscripto