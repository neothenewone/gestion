import { useForm } from 'react-hook-form';
import axios from "axios";
import convierte from '../adaptadores/convierte.js'
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import ObtieneDatosCookies from '../tools/obtieneDatosCookiesUsuario'
import { useState } from 'react';
import './usuarios.css';
import asignaPass from '../tools/asignaPass.js'
import devuelveSedeConsultada from '../tools/devuelveSede.js';
import devuelveDependenciaConstultada from '../tools/devuelveDependencia.js';

function CambiaContrasena () {
const cookies=new Cookies();
const navitate = useNavigate();
const parametro=ObtieneDatosCookies()
const destinos=devuelveDependenciaConstultada()
const sedes=devuelveSedeConsultada()
const [verForm,setVerForm]=useState(true)
  const URI='https://wwwa.isepsantafe.edu.ar/expedientes/usuarios/actualiza/'
 

  const [visible,setVisible]=useState("password")
  const [texto,setTexto]=useState("Mostrar Pass")
  const update=async (data)=>{
    alert(URI+parametro.identificacion)
    const resultado=await axios.put(URI+parametro.identificacion,convierte(data))
    console.log(resultado)
navitate('../usuarioLogueado')
   }
const {register, formState: { errors }, watch, handleSubmit,} = useForm({
defaultValues: parametro//recupero lo que pasa por parametros
});
  

const guardar=async(valor)=>
{ 
    if(valor.NuevaPass==valor.repiteNuevaPass){
    setVerForm(false)
    const nuevoPass=await asignaPass(valor.NuevaPass)

    const resultado=await axios.put(URI+parametro.identificacion,nuevoPass).then(x=>x.status=="200"?alert("cambio realizado"):alert("algo fallo")).then(setVerForm(true))}
    else{alert("las contraseñas no coinciden!!! Esta escribiendo: "+valor.NuevaPass+" y en cambio en el otro campo "+valor.repiteNuevaPass)}
}
  const regresar=()=>{
    navitate('/usuarioLogueado')
  }

const muestraPass=()=>{
    if(visible=="text"){
        setVisible("password")
        setTexto("Mostrar Pass")
    }else{
        setVisible("text")
        setTexto("Ocultar Pass")
    }
    
   
}
  return (
    <div>
      <div className="mb-3" >
      
        <h2>Cambie su contraseña</h2>
        <h3>Usuario:{parametro.nombre} {" "} {parametro.apellido}</h3>
      
   
      
      <form className='v' onSubmit={handleSubmit(guardar)} 
      style={
        {
            display:"flex",
            margin:"100px",
            alignContent:"center",
            height:"auto",
            width:"auto",
            zIndex:2
            }
        }
        >
      
        <section className="datos-">
    
    <div className="input-group input-group-sm mb-3"  >
          
        
          {errors.NuevaPass?.type === 'required' && (
            <span className="aviso-campos-loguin" style={{zIndex:3}}>Debe Ingresar su una contraseña nueva</span>
          )}
            <input
            style={{margin:"5px"}}
            type={visible}
            placeholder="Nueva contraseña"
            className="input-group-text"
            aria-label="Username" 
            aria-describedby="addon-wrapping"
            id="NuevaPass"
            {...register('NuevaPass', {
              required: true,
            
            })}
          />
     
          {errors.NuevaPass?.type === 'required' && (
            <span className="aviso-campos-loguin">Debe repetir su una contraseña nueva</span>
          )}
               <hr/>
            <input
            style={{margin:"5px"}}
            type={visible}
            placeholder="Repita su nueva contraseña"
            className="input-group-text"
            id="repiteNuevaPass"
            {...register('repiteNuevaPass', {
              required: true,
            
            })}
          />
           
        <input type="button" className="btn btn-outline-warning " style={{margin:"5px"}}value={texto} onClick={muestraPass} />
    
    </div>


    {verForm&&(<input type="submit" value="Guardar"  className="btn btn-primary"  />)}
    
    <button onClick={regresar} className="btn btn-danger" >Cancelar</button>
  
   
        </section>
       
        </form>
        </div>
     
    </div>
  );
};
export default CambiaContrasena;
