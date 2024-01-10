import axios from "axios";
import Cookies from 'universal-cookie';
import ObtieneDatosCookies from './obtieneDatosCookiesUsuario';
import {  useState } from 'react';
import { Spinner } from 'reactstrap';
import DevuelveInscriptos from './devuelveInscriptos';




function Ingreso2024 () {
const cookies=new Cookies();

const ID=cookies.get('id');
const cosa=ObtieneDatosCookies()
const [cargando, setCargando] = useState(true);
const[usuariosVarios, setUsuariosVarios]=useState(null)
const[estaOK, setEstaOK]=useState(false)
const [usuarioSeleccionado,setUsuario]=useState({})
  if(!ID){
     window.location.href='./';
 }
 const URI='https://apps.isepsantafe.edu.ar/inscriptos/devuelve'
 const URGestion='http://wwwa.isepsantafe.edu.ar/expedientes/inscriptos2024/consulta/'
const usuarioLoguead=ObtieneDatosCookies()

      
  const getUsuarios=async ()=>{
   try {
       const resultado=await axios.post(URI).then(console.log("termine")).then((response)=>{
      setUsuariosVarios(response);setEstaOK(true);setCargando(false)
    
    })
       } catch (error) {
        alert("algo fallo!")
      }
     }

  if(!estaOK){
    getUsuarios()
  }
 

  return (
    <div  id='button'>






     <div>
    
      </div>
    <div style={{textAlign:'center'}}>{cargando && (<h2>Cargando Postulantes 2024-2025...</h2>)}
    {cargando && (<Spinner color='priority'/>)}
    </div>  
     {usuariosVarios?"":""}
     <div style={{textAlign:'center'}}>{usuariosVarios?<section  className="datos-personales">
        
        {usuariosVarios?<DevuelveInscriptos datos={usuariosVarios}/>:""}
         
          <hr />
         
           </section>:""}
           </div>
        
      
    </div>
  );
};
export default Ingreso2024;


 

  
 
