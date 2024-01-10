import React , { useState }from "react";
import Child from './Child'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import conviertePresentePostulante from "../adaptadores/conviertePresentePostulante";
import swal from 'sweetalert'
import ModuloDevuelvePresentes from "../modulos/devuelvePresentes";
import ObtieneDatosCookies from '../tools/obtieneDatosCookiesUsuario';
import convierteAnulaPresentePostulante from '../adaptadores/convierteLogAnulaPresentePostulante'
import { CSVLink } from "react-csv";
import '../estilos/inscriptos.css'
import { Spinner } from 'reactstrap';
import devuelveDepartamento from '../tools/devuelveDepartamento'
import {useNavigate} from 'react-router-dom';
import obtieneDatos from './obtieneDatosCookiesUsuario'
function DevuelveInscriptos (props) {
  const Usuario=obtieneDatos()
  if(Usuario.destino<="0"||!Usuario||Usuario.destino==undefined){
    alert("Acceso no Autorizado SE REGRESA AL INICIO")
     window.location.href='./';
     
  } 
  const [LectorOn,setOn]=useState(false)
  const [texto,setTexto]=useState("Encender Camara QR");
  const[muestroPresentes,setMuestroPresentes]=useState(false)
  const[presentes,setPresentes]=useState({})
  const[seleccionado,setSeleccionado]=useState(false)
  const [presentesTotal,setPresentesTotal]=useState({})
  const [tituloDia,setTituloDia]=useState("")
  const [cargando, setCargando] = useState(false);
  const usuarioLoguead=ObtieneDatosCookies()
const postulantes=props.datos
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({});
  const navitate = useNavigate();
  const capturoQR=(valor)=>{
  try { 
    const elemento=valor.slice(1,valor.lastIndexOf("-"))
    redirecciona(props.datos.data.find(x=>x.id==elemento).dni)
  } catch (error) {
    alert("Codigo Qr Inexistente")
  }}

    const devuelvePresentes2024=async() => {
      setCargando(true)
      setMuestroPresentes(false)
      setSeleccionado(false)
      setTituloDia("Presentes Totales")
    
    const client = axios.create({
    baseURL: 'https://wwwa.isepsantafe.edu.ar/expedientes/inscriptos2024/primeraetapa/devuelve/todos'
    });
    try {
      await client.post('/').then(f=>setPresentes(f.data)).then(setMuestroPresentes(true)).then(setCargando(false))
     
      }
    catch (error) {}}                       

    const devuelvePresenteshoy=async() => {
      setCargando(true)
      setSeleccionado(true)
      var dia = new Date();

      var diareal = new Date();
  
      const parametroDia=sumarDias(dia, 1).toISOString().slice(0,10);
      
      setTituloDia("Presentes del dia "+diareal.toLocaleDateString())
      const hoy=dia.toISOString().slice(0,10)
      const client = axios.create({
      baseURL: 'https://wwwa.isepsantafe.edu.ar/expedientes/inscriptos2024/primeraetapa/devuelve/'
      });
      try {
        await client.post('/'+parametroDia).then(f=>setPresentes(f.data)).then(setMuestroPresentes(true)).then(setCargando(false))
       
        }
      catch (error) {}}       
   



    const daPresentePostulanteAPI=async(data) => {
      if(Usuario.destino<="0"||!Usuario||Usuario.destino==undefined){
        alert("Acceso no Autorizado SE REGRESA AL INICIO")
         window.location.href='./';
         
      }else{
        if(LectorOn){
          encenderCamara()
        }
        try {
          await axios.post('https://wwwa.isepsantafe.edu.ar/expedientes/inscriptos2024/primeraetapa/creapresente/',conviertePresentePostulante(data)).then(resetForm()).then(x=>respuestaMessage(x.data.message,data).then(muestroPresentes?devuelvePresenteshoy():"")
            
          );
         }
        catch (error) { console.log(error)
          alert(error)} 

      }
     }



const respuestaMessage=async(respuesta,info)=>{
   if(respuesta==true){
    await swal(
      {
        title:"Presente exitoso!",
        text:info.nombres+" "+info.apellido+" DNI: "+ info.dni,
        icon:"success",
        buttons:"Aceptar",
        timer: "1000"
      }
      ).then( document.getElementById("campo").focus())
  }else{
    await swal(
      {
        title:"Postulante ya registrado como Presente!",
        text:info.nombres+" "+info.apellido+" DNI: "+ info.dni,
        timer: "2000",
        icon:"warning",
        buttons:"aceptar"
      }
      ).then( document.getElementById("campo").focus())
  }}


const logueaLaAnulaPresente=async(dato,etapa)=>{
  
  alert("Presente Anulado!")

    try {
      await axios.post('https://wwwa.isepsantafe.edu.ar/expedientes/inscriptos2024/primeraetapa/loganula/',convierteAnulaPresentePostulante(dato,etapa)).then(setMuestroPresentes(false)).then(devuelvePresentes2024()).then(setMuestroPresentes(true))
     }
    catch (error) { console.log(error)
      alert(error)} }


const preguntaAnula=(dato,etapa)=>{

  const selccion = window.confirm("¿Desea eliminar el presente de "+postulantes.data.find(x=>x.id==dato).apellido+" ?");

  if(selccion){
    anulaPresente(dato,etapa)
  }; 
}
const anulaPresente=async(dato,etapa)=>{
      try {
        await axios.delete('https://wwwa.isepsantafe.edu.ar/expedientes/inscriptos2024/primeraetapa/anula/'+dato).then(logueaLaAnulaPresente(dato,etapa))
       }
      catch (error) { console.log(error)
        alert("algo fallo al anular el presente!")}
      }


  const encenderCamara=()=>
  {
   
    setOn(!LectorOn)
    if(LectorOn){
      setTexto("Encender Camara QR")
    }else{
      setTexto("Apagar Camara QR")
    }
  }
  
  
  const redirecciona=(dato)=>{ //funcion que busca en el array de los postulantes
  try {
    console.log(Usuario.destino)
    if(Usuario.destino<="0"||!Usuario||Usuario.destino==undefined){
      alert("Acceso no Autorizado SE REGRESA AL INICIO")
       window.location.href='./';
       
    }
    let postulante={}
    if(dato)
    {
     postulante=props.datos.data.find(x=>x.dni==dato)
     if(postulante&&postulante.id>0){
     daPresentePostulanteAPI(postulante)
      }
      else{
      alert("No se pudo dar presente postulante inexistente")
    }
    }else
    {
      alert("No se pudo dar presente postulante inexistente")
    }
    
  } catch (error) {alert("Ocurrio un error ")}
}


function sumarDias(fecha, dias){
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}

  const onSubmit = (parametroInscripto) => {
   if(parametroInscripto&&parametroInscripto.inscripto>=0){
    redirecciona(parametroInscripto.inscripto)}}
  
  const resetForm =()=>{
    document.getElementById("create-course-form").reset();
  }


  const headers = [
    { label: "Nro Control", key: "id" },
    { label: "Inscripto ID", key: "idInscripto" },
    { label: "DNI", key: "dniInscripto" },
    { label: "Apellido", key: "apellidoInscripto" },
    { label: "Nombres", key: "nombresInscripto" },
    { label: "Genero", key: "generoInscripto" },
    { label: "Usuario ID", key: "idUsuario" },
    { label: "Sede ID", key: "idSede" },
    { label: "Fecha y hora", key: "createdAt" },
    { label: "Control", key: "updatedAt" }
  ];
  const headers2= [
    { label: "Nro Control", key: "id" },
    { label: "DNI", key: "dni" },
    { label: "Email", key: "email" },
    { label: "cuil", key: "cuil" },
    { label: "Nombres", key: "nombres" },
    { label: "Apellido", key: "apellido" },
    { label: "Genero", key: "genero" },
    { label: "Estado Civil", key: "estadoCivil" },
    { label: "Fecha de Nacimiento", key: "fechaDeNacimiento" },
    { label: "Provincia de Nacimiento", key: "provinciaNacimiento" },
    { label: "Lugar de Nacimiento", key: "lugarDeNacimiento" },
    { label: "Apellido y Nombre Madre", key: "apellidoNombreMadre" },
    { label: "Apellido y Nombre Padre", key: "apellidoNombrePadre" },
    { label: "Reside en la Provincia", key: "resideProvincia" },
    { label: "En caso de no residir", key: "noResideProvincia" },
    { label: "Localidad", key: "localidad" },
    { label: "Departamento", key: "departamento" },
    { label: "Domicilio", key: "domicilio" },
    { label: "Telefono 1", key: "telefono_1" },
    { label: "Telefono 2", key: "telefono_2" },
    { label: "Comisaria", key: "comisaria" },
    { label: "Nivel de Estudio", key: "nivelEstudio" },
    { label: "Titulo Secundario", key: "tituloSecundario" },
    { label: "Fecha Titulo Secundario", key: "fechaTituloSecundario" },
    { label: "Titulo Superior", key: "tituloSuperior" },
    { label: "Fecha Titulo Superior", key: "fechaTituloSuperior" },
    { label: "Pregunta 1", key: "pregunta1" },
    { label: "Pregunta 2", key: "pregunta2" },
    { label: "Pregunta 3", key: "pregunta3" },
    { label: "Pregunta 4", key: "pregunta4" },
    { label: "Inscripto en Fecha", key: "createdAt" },
    { label: "Fecha Control", key: "updatedAt" }
  ];
const quienSoy=(valor)=>{
  const persona=props.datos.data.find(x=>x.dni==valor)
swal({
  title:persona.nombres+" "+persona.apellido,
  text:"Nro de Telefono: "+persona.telefono_1+" DNI: "+ persona.dni+" Domicilio: "+ persona.domicilio + " de la ciudad de "+persona.localidad+" Departamento " + devuelveDepartamento(persona.departamento),
  buttons:"Aceptar"
})
}
const volver=()=>
{
  navitate('/usuarioLogueado')
}
 return(
      <>

      <div className="grid-container">
      
        <div className="datosTotales">
       
        <h4>Menu de Asistencia Postulantes</h4>
        <h4>Total de Postulantes inscriptos:{postulantes.data.length}</h4>
      <CSVLink data={postulantes.data} filename={"Listado Postulantes 2024-2025"}
       className="btn btn-primary"target="_blank" headers={headers2} separator={";"}>
      Bajar listado total de Inscriptos CSV</CSVLink>

      
      <button className="btn btn-success" onClick={()=>{navitate('/Postulante')}}>Reimprimir Legajos de Postulantes</button>
      </div>
      <input  className="btn btn-warning" type="button" value="Volver" onClick={volver} />
      

      <div className="capturaPresentes">

        <h4>Dar Presentes</h4>
      <button className="btn btn-primary" onClick={encenderCamara}>{texto}</button>
      

         {LectorOn&&<><div className="camara"><Child direccion={(value) => capturoQR(value)} /></div></>}
         
     
      <form onSubmit={handleSubmit(onSubmit)} id="create-course-form">
    

      <input
            type="number"
            id="campo"
            placeholder="Ingrese el nro de DNI"
            {...register('inscripto', {
              required: true,
            })}
          />
          <div>
          <input className="btn btn-primary" type="submit"  value="Dar presente!"  style={{backgroundColor:"#257b0aa1"}}/>
          </div>
      


      </form>
      </div>
      <div className="footer">
      
        </div>
      <div className="devuelvePresentes"style={{textAlign:"center"}}> 
      <h3 style={{color:"black"}}>Asistencias</h3>
      
      <button className="btn btn-primary" onClick={devuelvePresenteshoy}>De la Fecha</button>
        <button className="btn btn-primary" onClick={devuelvePresentes2024}>Totales</button>
        {cargando && (<Spinner color='priority'/>)}
      {muestroPresentes&&presentes[0]&&<h3>{tituloDia}: {presentes.length}</h3>} 
      {muestroPresentes&&presentes[0]&&<h5 style={{color:"darkblue"}}>Rosario: {presentes.filter(x=>x.idSede==2).length+" "}Recreo: {presentes.filter(x=>x.idSede==3).length}</h5>} 
     
      {muestroPresentes&&presentes[0]&&(<><ModuloDevuelvePresentes nivel={usuarioLoguead.nivel}cosas={presentes} myID={(value)=>preguntaAnula(value,"1")}myDNI={(value)=>quienSoy(value )}/>

      <div > 
        <CSVLink data={presentes} filename={"Listado "+tituloDia}className="btn btn-primary"separator={";"}
      target="_blank" headers={headers}> Bajar listado Presentes</CSVLink></div>
     </>
      
      )} 
      </div>
     </div>
    
     </>
    )}export default DevuelveInscriptos