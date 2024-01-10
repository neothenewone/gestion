import * as React from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import obtieneDatos from '../tools/obtieneDatosCookiesUsuario'



const cookies=new Cookies();

function RecibirExpediente() {

  
 
const navitate = useNavigate()
const Usuario=obtieneDatos()
const usuario=cookies.get('apellido',{path:"/"})
const direccio=cookies.get('adress',{path:"/"})
console.log("estoy en el edit "+ Usuario.sedeID)
const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({});

  
  const onSubmit = () => {
    
    navitate('/nuevo')
    };

  const volver=()=>
  {
    
    navitate('/usuarioLogueado')
  }
  
  const sacarExpediente=()=>{
    navitate('/recibeExpediente')
  };
  const recibirExpediente=()=>{
    navitate('/sacaExpediente')
  };
  const consultaExpediente=()=>{
    navitate('/consultaExpediente')
  };
 
  if(!usuario){
    alert("Acceso no Autorizado")
     window.location.href='./';
     
}
const editaUsuarios=()=>{
  navitate('/usuarios')
};

if(!usuario){
  alert("Acceso no Autorizado")
   window.location.href='./';
   
}
  return (
    <div>
    <div className='form__container_edit'>
      
      
        <section className="form__group">
          <h3 className="edit__title">Bienvenido usuario  {usuario}</h3>
          

          <hr/>

        
       
    
        <div className="Boton_Grande">
         
        
         
          <input type="button" value="Recibir Expediente" className="Boton_Grande" onClick={recibirExpediente}/>
        
        </div>
        <div className="Boton_Grande">
         
          
        </div>
       
        </section>
 

      <footer>
      <div className="contenedor_boton_edit">
          <input type="button" value="Volver" className="botton_Volver" onClick={volver}/>
          
        </div>
        <div className="edit__footer">
          <p>DTyD 2023 sistemas@isepsantafe.edu.ar</p>
        </div>
      </footer>
      
    </div></div>
  );
}
export default RecibirExpediente;
