import * as React from 'react';
import { set, useForm } from 'react-hook-form';
import {useNavigate,useParams} from 'react-router-dom';
import Cookies from 'universal-cookie';
import './edit.css';
import obtieneDatos from './obtieneDatosCookiesUsuario'
import axios from 'axios';
var muestraEdita=false;
const cookies=new Cookies();

function Main() {

  
 
const navitate = useNavigate()
const Usuario=obtieneDatos()

const devuelveInscriptos2024=async() => {
  const client = axios.create({
  baseURL: 'https://apps.isepsantafe.edu.ar/inscriptos/devuelve'
  });
  try {
    const response = await client.post('/').then(x=> cookies.set("inscriptos",x, {path:"/"})).then(navitate('/ingreso2024'));
    }
  catch (error) {}}
  const devuelveReInscriptos2024=async() => {
    console.log('https://apps.isepsantafe.edu.ar/inscriptos/RE/devuelve')
    const client = axios.create({
    baseURL: 'https://apps.isepsantafe.edu.ar/inscriptos/RE/devuelve'
    });
    try {
      const response = await client.post('/').then(x=> cookies.set("inscriptos",x, {path:"/"})).then(navitate('/reingreso2024'));
      }
    catch (error) {}}
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
    
    navitate('/')
  }
  
  const sacarExpediente=()=>{
    navitate('/sacaExpediente')
  };
  const recibirExpediente=()=>{
    navitate('/recibeExpediente')
  };
  const consultaExpediente=()=>{
    navitate('/consultaExpediente')
  };
 
  if(!Usuario){
    alert("Acceso no Autorizado")
     window.location.href='./';
     
}
const editaUsuarios=()=>{
  navitate('/usuarios')
};
const inscripcion2024=()=>{
  navitate('/ingreso2024')
};
if(!Usuario){
  alert("Acceso no Autorizado")
   window.location.href='./';
   
}

const cadetes=()=>{
  navitate('/cadetes')
}

const menuCertificados=()=>{
  navitate('/Certificados')
}
  return (
    <div >
    <div className='form__container_edit'>
    <div className='menu_edit' style={{display:"flex"}}>
    <div  style={{marginLeft:"25%"}}>
    <h3 className="edit__title">Bienvenido {Usuario.nombre + " "+Usuario.apellido}</h3>
          <input type="button" value="Menu Usuario"style={{marginLeft:"50%", padding:"5px"}}  onClick={editaUsuarios}/>

          <hr/></div>
          
          </div>
          
      <form onSubmit={handleSubmit(onSubmit)} className='form_edit_back'>
        <section className="form__group">
      

        <div sty>
        {Usuario.destino=="9"||Usuario.destino=="7"||Usuario.destino=="1"&&Usuario.identificacion=="573523"? <> <input type="button" value="Cadetes"  className="Boton_Grande_Existente"  onClick={cadetes}/>
          </>:""}

          
        {Usuario.destino=="9"||Usuario.destino=="7"||Usuario.destino=="1"?<> <input type="button" value="Proceso 2024"  className="Boton_Grande_Existente"  onClick={devuelveInscriptos2024}/>
          </>:""}
          {Usuario.destino=="9"||Usuario.destino=="7"||Usuario.destino=="1"?<> <input type="button" value="Proceso 2024 (Reapertura)"className='btn btn-warning'  style={{height:"200px",width:"auto",padding:"4px",borderRadius:"5px",borderBlockColor:"pink"}}  onClick={devuelveReInscriptos2024}/>
          </>:""}
          {Usuario.destino=="10"||Usuario.destino=="7"||Usuario.destino=="1"?<> <input type="button" value="Certificados"className='btn btn-success'  style={{height:"200px",width:"auto",padding:"4px",borderRadius:"5px",borderBlockColor:"pink"}}  onClick={menuCertificados}/>
          </>:""}
          {
          Usuario.destino=="7"||Usuario.destino=="1"?
          <>
            <input type="submit" value="Nuevo expediente" disabled className="Boton_Grande_Existente" />
        <input type="button"  value="Consulta Expediente" disabled className="Boton_Grande_Existente" onClick={consultaExpediente}/> 
          </>
          :<>
          <input type="submit"  value="Nuevo expediente"disabled className="Boton_Grande_Nuevo"/>
        <input type="button" value="Consulta Expediente"disabled className="Boton_Grande_Existente"  onClick={consultaExpediente}/>
        </>
        }
         
          
         
        
        
       
        </div>
        <div>
         
      
        </div>
        <div className="contenedor_boton_edit">
          <input style={{padding:"15px"}} type="button" value="Salir" className="botton_Volver" onClick={volver}/>
          
        </div>
        </section>
      </form>

      <footer>
        <div className="edit__footer">
          <p>DTyD 2024 sistemas@isepsantafe.edu.ar</p>
        </div>
      </footer>
      
    </div></div>
  );
}
export default Main;
