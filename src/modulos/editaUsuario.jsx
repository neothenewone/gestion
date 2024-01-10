import { useForm } from 'react-hook-form';
import axios from "axios";
import convierte from '../adaptadores/convierte.js'
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import seteaCokie from '../tools/seteaCokie.js';
import { useState } from 'react';

import asignaPass from '../tools/asignaPass.js'
import devuelveSedeConsultada from '../tools/devuelveSede';
import devuelveDependenciaConstultada from '../tools/devuelveDependencia.js';


function ModuloEditaUsuarios (props) {
const cookies=new Cookies();
const navitate = useNavigate();
const parametro=props.datos
const destinos=devuelveDependenciaConstultada()
const sedes=devuelveSedeConsultada()
const [verForm,setVerForm]=useState(false)
  const URI='https://wwwa.isepsantafe.edu.ar/expedientes/usuarios/actualiza/'
 

  
  const update=async (data)=>{
    alert(URI+parametro.identificacion)
    const resultado=await axios.put(URI+parametro.identificacion,convierte(data))
if(cookies.get('id',{path:"/"})==data.id){seteaCokie(data)}

navitate('../usuarioLogueado')
   }
const {register, formState: { errors }, watch, handleSubmit,} = useForm({
defaultValues: parametro//recupero lo que pasa por parametros
});
  

const guardar=(data)=>{update(data)}
const blanquear=async()=>
{ const nuevoPass=await asignaPass("Alem+2050")
  const resultado=await axios.put(URI+parametro.identificacion,nuevoPass).then(alert("Pass Blanqueado: Alem+2050"))
}
  
const cambiarPass=()=>{

 setVerForm(!verForm)
}

  return (
    <div>
      <div className="titulo">
      
        <h2>Modulo de Edicion de Usuarios</h2>
        <h3>Usuario Seleccionado:  {parametro.apellido}</h3>
      
      </div>
    
      
      <form className='v' onSubmit={handleSubmit(guardar)}>
      
        <section className="datos-">
    
    <div className="grupo_form">
          {errors.apellido?.type === 'required' && (
            <span className="aviso-campos-loguin">*</span>
          )}
          
          {errors.apellido?.type === 'minLength' && (
              <span className="s">
               6 u 8 numeros
              </span>
            )}
          <input
            type="text"
            placeholder="Apellido"
            className="inputa_form"
            id="apellido"
            {...register('apellido', {
              required: true,
              minLength: 3,
              maxLength:16
            })}
          />
           
            <span className="form__line"></span>
    </div>
    <div className="grupo_form">
    {errors.nombre?.type === 'required' && (
            <span className="aviso-campos-loguin">*</span>
          )}
          
          {errors.nombre?.type === 'minLength' && (
              <span className="aviso_formulario">
               6 u 8 numeros
              </span>
            )}
          <input
            type="text"
            placeholder="Nombre"
            className="input_form"
            id="nombre"
            {...register('nombre', {
              required: true,
              minLength: 3,
              maxLength:16
            })}
          />
            
            <span className="form__line"></span>
    </div>
    
    <div className="grupo_form">
    {errors.identificacion?.type === 'required' && (
            <span className="aviso-campos-loguin">*</span>
          )}
          
          {errors.identificacion?.type === 'minLength' && (
              <span className="aviso_formulario">
               6 u 8 numeros
              </span>
            )}
          <input
            type="text"
            placeholder="Nro de Identificacion"
            className="input_form"
            id="identificacion"
            {...register('identificacion', {
              required: true,
              minLength: 3,
              maxLength:16
            })}
          />

            <span className="form__line"></span>
    </div>
   

    <div className="grupo_form">
    <div>
            <label for="nivel">Sede de Destino</label>
            <br />
          <select
            className="deptos" id='sedeID'
            {...register('sedeID', {
              required: true,
            })}
          >
            {sedes.map((cate) =>
            <><option key={cate.id} value={cate.id}>
            {cate.descripcion}
            </option>
            </>
        )}     
          
          
          

          </select></div>
          <div>
            <label for="nivel">Unidad de Destino</label>
            <br />
          <select
            className="deptos" id='destino'
            {...register('destino', {
              required: true,
            })}
          >
            {destinos.map((cate) =>
            <><option key={cate.id} value={cate.id}>
            {cate.descripcion}
            </option>
            </>
        )}     
          
          
          

          </select></div>
    
    </div>


        
   
    <div className="">
    <div className="">
    <div>
            <label for="nivel">Nivel de Acceso</label>
            <br />
          <select
            className="deptos" id='nivel'
            {...register('nivel', {
              required: true,
            })}
          >
           
            <option value="1">Super User</option>
            <option value="2">Administrador</option>
            <option value="3">Operador</option>
            <option value="4">Observador</option>
          </select></div>
          
    </div>
    
    </div>
    <div className="grupo_form">
    <div>
            <label for="estado">Estado</label>
            <br />
          <select
            className="deptos" id='estado'
            {...register('estado', {
              required: true,
            })}
          >
            <option value="1">Activo</option>
            <option value="2">Suspendido</option>
           
          </select></div>
    
    </div>
    <input type="submit" value="Guardar"  className="btn btn-primary" id="btnSalir" />
        </section>
       
        <input type="button" value="Blanquear Pass" onClick={blanquear} className="btn btn-danger" id="btnSalir" />
      
        
       
        </form>
     
    </div>
  );
};
export default ModuloEditaUsuarios;
