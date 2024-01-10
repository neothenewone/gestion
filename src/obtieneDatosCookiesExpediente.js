import Cookies from 'universal-cookie';
const cookies =new Cookies;

const ObtieneDatosCookiesExpediente=()=>{
    
const datos=
{ "idUsuarioExpediente":cookies.get('idUsuarioExpediente'),
  "idExpediente":cookies.get('idExpediente'),
  "idExpSecretaria":cookies.get('idExpSecretaria'),
  "titular":cookies.get('titular',{path:"/"}),
  "idCategoria":cookies.get('idCategoria',{path:"/"}),
  "idCategoria":cookies.get('idCategoria',{path:"/"}),
  "concepto":cookies.get('concepto',{path:"/"}),
  "idExpMinisterio":cookies.get('idExpMinisterio',{path:"/"}),
  "fechaMinisterio":cookies.get('fechaMinisterio',{path:"/"}),

}

   return datos;
      
}
export default ObtieneDatosCookiesExpediente;