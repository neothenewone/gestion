import React , { useState }from "react";
import {useNavigate,useParams} from 'react-router-dom';
import obtieneDatos  from '../tools/obtieneDatosCookiesUsuario'
import DevuelveCursos from '../certificados/devuelveCursos'
import DevuelveCertificados from '../certificados/devuelveCertificados'
import convierte from '../cadetes/convierteCadete'
import convierteSoloEstado from './convierteSoloEstado'
import convierteLtb from '../cadetes/convierteLTB'
import seteaCertificado from './seteaCokieCertificado'
import { UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,Badge } from "reactstrap";
    import { CSVLink } from "react-csv";
import axios from 'axios';
function Certificados () {
    const Usuario=obtieneDatos()
    const navitate = useNavigate()
    const[cadetes,setCadetes]=useState({}) 
    const[cursosDisponibles,setCursosDisponibles]=useState({}) 
    const[muestroCursos,setMuestroCursos]=useState(false)
    const[muestraCantidadCadetes,setMuestraCantidadCadetes]=useState(false)
    const[muestroCadetes,setMuestroCadetes]=useState(false)
    const[cantidadCadetes,setCantidadCadetes]=useState(0)
    const[condicion,setcondicion]=useState("Regular")

    const [sedeConsulta,setSedeConsultada]=useState("TODAS")
const cursos=[
    {"id":1,"curso":"1ROS AUXILIOS Y RCP","escuela":"Escuela de Especialidades","api":"https://wwwa.isepsantafe.edu.ar/expedientes/certificados/consulta/","estado":"Activo"},
    {"id":2,"curso":"Curso 2023-2024 Segundo Tramo","escuela":"Escuela de Policia","api":"https://wwwa.isepsantafe.edu.ar/expedientes/curso2023-2024ST/","estado":"Activo"}
   
]



const muestraCadetes=async(datillo,condicion)=>{
  const client = axios.create({
      baseURL: datillo.api
      });
      try {
        await client.post('/').then(f=>setCadetes(f.data)).then(setMuestroCadetes(true))
       
        }
      catch (error) {}
 
}
const modificaEstado=async(cadeteDni,estado)=>{
  const client = axios.create({
      baseURL:"https://wwwa.isepsantafe.edu.ar/expedientes/curso2023-2024/"
      });
      try {
        console.log("ingresando a modifica estado en: "+estado)
        alert("datos Actulaizados")
        await client.put('actualiza/'+cadeteDni.cadeteDni,convierteSoloEstado(estado))
        }
      catch (error) {}
 
}
const creaLTB=async(cadete)=>{
  const client = axios.create({
      baseURL: "https://wwwa.isepsantafe.edu.ar/expedientes/curso2023-2024/"
      });
      try {
        alert("datos Actulaizados")
        await client.post('/creaLtb/',convierteLtb(cadete)).then(modificaEstado(cadete,"LTB"))
       
        }
      catch (error) {}
 
}
const headers = [
  { label: "Nro Control", key: "id" },
  { label: "DNI", key: "cadeteDni" },
  { label: "Nombres", key: "cadeteNombre" },
  { label: "Apellido", key: "cadeteApellido" },
  { label: "Sede", key: "cadeteSede" },
 
];
const cambioSede=e=>{
 
    setSedeConsultada(e.target.value);

    sedeConsulta==="TODAS"?setCantidadCadetes(cadetes.length):setCantidadCadetes(cadetes.filter(x=>x.cadeteSede==sedeConsulta).length)
   
    
}
const cambioCondicion=e=>{
 
  setcondicion(e.target.value);

  
}
const modificoEstadoCadetes=async(cadeteAmodificar)=>{
     await creaLTB(cadeteAmodificar)
}

const volver=()=>{
    navitate('/usuarioLogueado')
}
const imprimoCertifcado=(certficadoSeleccionado)=>{
  seteaCertificado(certficadoSeleccionado)
  window.open('/imprimeCertificado')
}

    return(
        <>
         <div >
           
          
          </div>
<div style={{textAlign:"center", backgroundColor:"lightgreen", margin:"5px"}}>
           <h1 >Menu de Gestion de Certificaciones</h1> 
           <h3>Usuario logueado:{Usuario.nombre}</h3>
           <button className="btn btn-warning" onClick={volver}>Volver</button>
           </div>
           <div style={{ color:"white",textAlign:"center", maxWidth:"400",minHeight:"600",backgroundColor:"#aaa", margin:"5px"}}>
<h1 >Certificaciones Registradas</h1>


<DevuelveCursos cosas={cursos} myID={(value)=>muestraCadetes(value,condicion)} />


{muestroCadetes&&cadetes[0]&&(<>
<div className="btn btn-warning"style={{fontSize:"20px"}}>
<UncontrolledDropdown>
  <DropdownToggle
    caret
    color="dark"
  >
    Sedes 
  </DropdownToggle>
  <Badge>
      {sedeConsulta}
    </Badge>
   
  <DropdownMenu dark>
   
    <DropdownItem     value="ROSARIO" 
   
    onClick={cambioSede}>
     ROSARIO
    </DropdownItem>
    <DropdownItem     value="RECREO" 
   
    onClick={cambioSede}>
     RECREO
    </DropdownItem>
    <DropdownItem     value="RECONQUI" 
   
    onClick={cambioSede}>
     RECONQUISTA
    </DropdownItem>
    <DropdownItem     value="RAFAELA" 
   
    onClick={cambioSede}>
     RAFAELA
    </DropdownItem>
    <DropdownItem     value="MURPHY" 
   
    onClick={cambioSede}>
     MURPHY
    </DropdownItem>
    <DropdownItem divider />
    <DropdownItem     value="TODAS" 
   
   onClick={cambioSede}>
    TODAS
   </DropdownItem>

   
  </DropdownMenu>
</UncontrolledDropdown>




</div>
<div style={{display:"flex-container", justifyContent:"space-between",margin:"10px"}}>
  <div style={{}}>
<DevuelveCertificados cosas={sedeConsulta==="TODAS"?cadetes:cadetes.filter(x=>x.cadeteSede==sedeConsulta)} myID={(value2)=>imprimoCertifcado(value2)} />
</div>

<div > 
        <CSVLink data={cadetes} filename={"Listado "+sedeConsulta}className="btn btn-primary"separator={";"}
      target="_blank" headers={headers}> Bajar listado Presentes</CSVLink></div>
     
</div>

</>)}

           </div>
           
          
        </>
    )
}
export default Certificados