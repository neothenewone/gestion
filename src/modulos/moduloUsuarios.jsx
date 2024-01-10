import { useForm } from 'react-hook-form';
import axios from "axios";
import convierte from '../adaptadores/convierte'
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import seteaCokie from '../tools/seteaCokie';
import ModuloEditaUsuarios from './editaUsuario';
import ObtieneDatosCookies from '../tools/obtieneDatosCookiesUsuario';
import ModuloDevuelveUsuarios from './devuelveUsuarios';
import { useState } from 'react';

import devuelveDependenciaConstultada from '../tools/devuelveDependencia';




function ModuloUsuarios () {
const cookies=new Cookies();
const navitate = useNavigate();
const ID=cookies.get('id');
const cosa=ObtieneDatosCookies()
const[usuariosVarios, setUsuariosVarios]=useState(null)
const[estaOK, setEstaOK]=useState(false)
const[estaSeleccionado, setEstaSeleccionado]=useState(false)
const[variable, setVariable]=useState("")
const [usuarioSeleccionado,setUsuario]=useState({})
  if(!ID){
     window.location.href='./';
 }
 const URI='https://wwwa.isepsantafe.edu.ar/expedientes/usuarios/'
const usuarioLoguead=ObtieneDatosCookies()
 const {register, formState: { errors }, watch, handleSubmit,} = useForm({
  defaultValues: usuarioSeleccionado//recupero lo que pasa por parametros
  });
  const getUsuarios=async ()=>{
   try {
    const resultado=await axios.post(URI).then((response)=>{
      setUsuariosVarios(response.data);setEstaOK(true)
    })
       } catch (error) {
    
      }
     }

  const store=async (data)=>{
    await axios.post(URI,convierte(data))
    alert("creado!!!");
    
    seteaCokie(data);
    cookies.set('id',"-1", {path:"/"});
    navitate('/imprime');
   }

 

  const volver=()=>
  {
    navitate('/usuarioLogueado')
  }
 

  
  if(!estaOK){
    getUsuarios()
  }
 
const eligeUsuario= async(value)=>{
  setVariable(value)
  setEstaSeleccionado(false)
const dependencias =await devuelveDependenciaConstultada(value)

const esteUsuario=usuariosVarios.filter(persona=>persona.id===value)
setUsuario(esteUsuario[0])
setEstaSeleccionado(true)

}
const CambiaContrasena=()=>{
  navitate('/cambioContrasena')
}
  return (
    <div>
      <div className="titulo">
        <h2>Modulo de Edicion de Usuarios</h2>
        <h2>Ante Cualquier duda consulte a SISTEMAS@ISEPSANTAFE.EDU.AR</h2>
      </div>
     <div style={ { "display": "flex", "justify-content": "center"}}>
      {usuarioLoguead.nivel<"9"&&(<button onClick={CambiaContrasena} className='btn btn-primary'>Cambiar Mi Contraseña</button>)}
      </div>
<hr />
      {usuarioLoguead.nivel<="2"&&estaOK&&(<ModuloDevuelveUsuarios cosas={usuariosVarios} myID={(value)=>eligeUsuario(value)}/>)}
        <section className="datos-personales">
        
        {estaSeleccionado&&<ModuloEditaUsuarios datos={usuarioSeleccionado}  />}
          <h3 className="">Datos Personales</h3>{/* ENCABEZADOS*/}
          <hr />
         
        </section>
        <input type="button" value="volver" onClick={volver} className="btn btn-warning"/>
     
      <footer>
        <div className="corp">
          <p>DTyD 2023 sistemas@isepsantafe.edu.ar</p>
        </div>
      </footer>
    </div>
  );
};
export default ModuloUsuarios;
