import Cookies from 'universal-cookie';
const cookies =new Cookies;

const seteaCokieExpediente=async(respuesta)=>{

   
    cookies.set("idUsuarioExpediente",respuesta.usuarioID, {path:"/"}) 
    cookies.set("idSedeExpediente",respuesta.usuarioSedeID, {path:"/"}) 
    cookies.set("idDependenciaExpediente",respuesta.dependenciaID, {path:"/"}) 
    cookies.set("idExpediente",respuesta.id, {path:"/"}) 
    cookies.set("idExpSecretaria",respuesta.idExpSecretaria, {path:"/"}) 
    cookies.set("titular",respuesta.titular, {path:"/"}) 
    cookies.set("idCategoria",respuesta.idCategoria, {path:"/"}) 
    cookies.set("concepto",respuesta.concepto, {path:"/"}) 
    cookies.set("idExpMinisterio",respuesta.idExpMinisterio, {path:"/"}) 
    cookies.set("fechaMinisterio",respuesta.fechaMinisterio, {path:"/"}) 

      
}
export default seteaCokieExpediente;