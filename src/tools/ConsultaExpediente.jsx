import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import './edit.css';
import Child from "./Child.js";
import ModuloDevulveExpediente from '../modulos/ModuloDevulveExpediente.jsx';
import axios from 'axios';
import ObtieneDatosCookies from './obtieneDatosCookiesUsuario.js';
import convierteNuevoMovimiento from '../adaptadores/convierteNuevoMovimiento.js';
import convierteActualizaMovimiento from '../adaptadores/convierteActualizaMovimiento.js';

const cookies=new Cookies();

function ConsultaExpediente() {

const nroExpediente=cookies.get('adress',{path:"/"})
const nivelUsuarioSacar=3
const nivelUsuarioRecibir=4
const [ExpedienteSeteado, setFlag] = useState(null);
const [MovExpSeteado, setFlag2] = useState(null);
const navitate = useNavigate()
const usuario=ObtieneDatosCookies()
const [puedeRecibir,setPuedeRecibir]=useState(false)
const [puedeSacar,setPuedeSacar]=useState(false)
const [LectorOn,setOn]=useState(false)
const [expediente,setNroExpediente]=useState(null)

const [leyendaLector,setLeyenda]=useState("Activar lector QR")
const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({});

   
  const devuelveExpedienteAPI=async(dato) => {
    const client = axios.create({
    baseURL: "https://wwwa.isepsantafe.edu.ar/expedientes/expedientes/"
    });
    const response = await client.post('/'+dato);
    return response.data
    }
  
  const devuelveMovimientoExpedienteAPI=async(dato) => {
    const client = axios.create({
    baseURL: "https://wwwa.isepsantafe.edu.ar/expedientes/movimientos/consulta/"
    });
    try {
      const response = await client.post('/'+dato);
      return response.data}
    catch (error) {}}
    
    const creaMovimientoExpedienteAPI=async(data) => {

      const client = axios.create({
      baseURL: "https://wwwa.isepsantafe.edu.ar/expedientes/movimientos/crea"
      });
      try {
        const response = await client.post('/',data);
        onSubmit(expediente)}
      catch (error) {}}

      
    const ActualizaMovimientoExpedienteAPI=async(direccion,data) => {
      
      const client = axios.create({
      baseURL: "https://wwwa.isepsantafe.edu.ar/expedientes/movimientos/actualiza"
      });
      try {
        const response = await client.put('/'+direccion,data);
        onSubmit(expediente)}
      catch (error) {}}

  const onSubmit = (parametroExpediente) => {
    setNroExpediente(parametroExpediente)
    
  f(parametroExpediente.expediente).then(x => setFlag(x)); // 5
  g(parametroExpediente.expediente).then(z => setFlag2(z.pop())); // 5

    
  }
 
  const f = async(a) => {
  return await devuelveExpedienteAPI(a)}
  const g= async(a) => {
  return await devuelveMovimientoExpedienteAPI(a)}

const recibirExpediente=()=>
{
   ActualizaMovimientoExpedienteAPI(MovExpSeteado.id,convierteActualizaMovimiento())
}

  const gestionaMovimientos=()=>{
!MovExpSeteado?sacoCero():alert("sacoCero()")

}
  
  const sacoMovimiento=()=>{

ActualizaMovimientoExpedienteAPI(MovExpSeteado.id,convierteActualizaMovimiento())

}
const sacoCero=()=>{

  creaMovimientoExpedienteAPI(convierteNuevoMovimiento(ExpedienteSeteado))

}

  
  const volver=()=>{navitate('/usuarioLogueado')}
 
  if(!usuario){
    alert("Acceso no Autorizado")
     window.location.href='./';
     
}
const ActivaLector=()=>{
  if(LectorOn){
setOn(false)
setLeyenda("Encender lector QR")
  }else{
setOn(true)
setLeyenda("Apagar lector QR")
  }
}
const capturoQR=(valor)=>{
const elemento={"expediente":valor}
onSubmit(elemento)
setOn(false)

}
const puedoSacar=()=>{
  if(usuario.nivel<=nivelUsuarioSacar){
    setPuedeSacar(true)
  }}
const puedoRecibir=async()=>{
  if(MovExpSeteado){
    if(!MovExpSeteado.destinoEntradaID)
    return  true
  }else{
   return false
  }
}


  return (
    <div >

       
<section style={{"text-align":"center"}}>
    <h1 >Consultas de Expedientes ISeP</h1>

      <div className="contenedor_boton_edit" style={{"text-align":"center","position":"center"}}>
          <input type="button"  value={leyendaLector} className="botton_aVolver" onClick={ActivaLector}/>
          
        </div>
      {LectorOn&&<Child direccion={(value) => capturoQR(value)} />}
    
        <form onSubmit={handleSubmit(onSubmit)} className='form_edit_back'>
        <section className="form__group">
         <hr/>

          <h3>o bien</h3>
          <div className="Boton_Grande">
     <input

            type="number"

            placeholder="Ingrese el nro de Expediente sin los codigos 000- y -000" className="input__formulario"
            {...register('expediente', {
              required: true,
            })}
          />
          <input type="submit"  value="Consultar" className="botton_Volver"/>
          </div>
      
     
       
        </section>
      </form>
      <ModuloDevulveExpediente infoExpediente={ExpedienteSeteado}infoMovExpediente={MovExpSeteado}/>
      <div style={{"fontWeight":"800","color":"red"}}>
      
      
      </div>
      
      
       <div>
{!ExpedienteSeteado?"":(MovExpSeteado&&!MovExpSeteado.destinoEntradaID&&(<button onClick={recibirExpediente}>Recibir Expediente</button>))}
{!ExpedienteSeteado?"":(MovExpSeteado&&MovExpSeteado.destinoEntradaID==usuario.destino?(<button onClick={sacoCero}>Sacar Expediente</button>):"")}
{!ExpedienteSeteado?"":(!MovExpSeteado&&ExpedienteSeteado.dependenciaID==usuario.destino?(<button onClick={sacoCero}>Sacar Expediente</button>):"")}
      </div>
    


</section>
<div className="contenedor_boton_edit" style={{"text-align":"center","position":"center"}}>
          <input type="button"  value="Volver" className="botton_Volver" onClick={volver}/>
          
        </div>
      <footer>
        <div className="edit__footer">
          <p>DTyD 2023 sistemas@isepsantafe.edu.ar</p>
        </div>
      </footer>
      </div> 
   
  );
}
export default ConsultaExpediente;
