import Cookies from 'universal-cookie';
const cookies =new Cookies;

const seteaCokie=(respuesta)=>{
    cookies.set("id",respuesta.id, {path:"/"}) 
    cookies.set("pass",respuesta.pass, {path:"/"}) 
    cookies.set("apellidoUsuario",respuesta.apellido, {path:"/"}) 
    cookies.set("nombre",respuesta.nombre, {path:"/"}) 
    cookies.set("identificacion",respuesta.identificacion, {path:"/"}) 
    cookies.set("sedeID",respuesta.sedeID, {path:"/"}) 
    cookies.set("destino",respuesta.destino, {path:"/"}) 
    cookies.set("nivel",respuesta.nivel, {path:"/"}) 
    cookies.set("estado",respuesta.estado, {path:"/"}) 
    cookies.set("createdAt",respuesta.createdAt, {path:"/"}) 
    cookies.set("updatedAt",respuesta.updatedAt, {path:"/"}) 
      
}
export default seteaCokie;