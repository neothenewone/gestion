import * as React from 'react';
import {  useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import obtieneDatos from '../tools/obtieneDatosCookiesUsuario'



var muestraEdita=false;
const cookies=new Cookies();

function SacarExpediente() {

  
 
const navitate = useNavigate()
const usuario=obtieneDatos()

const expedienteID=cookies.get('adress',{path:"/"})

const {register,formState: { errors },handleSubmit,} = useForm({});

  
  const onSubmit = (data) => {
    
    alert(data.expediente)
    };

  const volver=()=>
  {    
    navitate('/')
  }
  


 
  if(!usuario){
    alert("Acceso no Autorizado")
     window.location.href='./';
     
  }

  return (
    <div >
    <div className='form__container_edit'>
    <h1>Seleccione el id del Expediente a sacar o active el lectorQR</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='form_edit_back'>
        <section className="form__group">
        <hr/>
        <input type="number" name="expediente" id="expediente" placeholder='Ingrese el nro'{...register('expediente', {
              required: true,


            })}/>
        <div className="Boton_Grande">
           
        <input type="submit" value="Sacar Expediente" className="Boton_Grande"/>
        </div>
        <div className="contenedor_boton_edit">
          <input type="button" value="Salir" className="botton_Volver" onClick={volver}/>
        </div>
        </section>
        <div className="contenedor_boton_edit">
          <input type="button" value="Salir" className="botton_Volver" onClick={volver}/>
          
        </div>
      </form>
     
      <footer>
        <div className="edit__footer">
          <p>DTyD 2023 sistemas@isepsantafe.edu.ar</p>
        </div>
      </footer>
      
    </div></div>
  );
}
export default SacarExpediente;
