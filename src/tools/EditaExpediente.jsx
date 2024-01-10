import React, { useState, useEffect } from 'react';
import { set, useForm } from 'react-hook-form';
import {useNavigate,useParams} from 'react-router-dom';
import Cookies from 'universal-cookie';
import './edit.css';
import Child from "./Child";

import regresaBienFecha from './regresaBienFecha';

var muestraEdita=false;
const cookies=new Cookies();

function EditaExpediente() {

  
  const [flag, setFlag] = useState("");
const navitate = useNavigate()
const usuario=cookies.get('apellido',{path:"/"})
const dataQR=cookies.get('dataQR',{path:"/LectorQr"})
const [leyendo, setsLeyendo] = useState(false);
const [LectorOn,setOn]=useState(false)
const [leyendaLector,setLeyenda]=useState("Activar lector QR")
const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({});

  
  const onSubmit = () => {
   
    console.log("leyendo!")
    console.log(leyendo)
   // navitate('/imprime')
    };

  const volver=()=>
  {
    
    navitate('/usuarioLogueado')
  }
  
  const consultar=()=>
  {
    
    navitate('/usuarioLogueado')
  }

  
 
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

  return (
    <div >

         
<section style={{"text-align":"center"}}>
    <h1 >Consultas de Expedientes ISeP</h1>

      <div className="contenedor_boton_edit" style={{"text-align":"center","position":"center"}}>
          <input type="button"  value={leyendaLector} className="botton_aVolver" onClick={ActivaLector}/>
          
        </div>
      {LectorOn&&<Child direccion={(value) => setFlag(value)} />}
    <form onSubmit={handleSubmit(onSubmit)} className='form_edit_back'>
        <section className="form__group">
         
          

          <hr/>

        
       
     
        
          <h3>o bien</h3>
          <div className="Boton_Grande">
          
          <input
            type="text"
            placeholder="Ingrese el nro de Expediente" className="input__formulario"
            {...register('nroExpediente', {
              required: true,
              pattern: /^-?\d+(?:,\d+)?(?:[Ee][-+]?\d+)?$/i,
              maxLength: 8,
              minLength: 8,
            })}
          />
          <input type="submit"  value="Consultar" className="botton_Volver" onClick={onSubmit}/>
          </div>
       
       
        </section>
      </form>



</section>
<div className="contenedor_boton_edit" style={{"text-align":"center","position":"center"}}>
          <input type="button"  value="Volver" className="botton_Volver" onClick={volver}/>
          
        </div>
      <footer>
        <div className="edit__footer">
          <p>DTyD 2024 sistemas@isepsantafe.edu.ar</p>
        </div>
      </footer>
      </div> 
   
  );
}
export default EditaExpediente;
