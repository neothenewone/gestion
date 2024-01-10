import Cookies from 'universal-cookie';
const cookies =new Cookies; 
const removeCokies=()=>{
    cookies.remove("id", {path:"/"}) 
    cookies.remove("pass", {path:"/"}) 
    cookies.remove("apellidoUsuario",{path:"/"}) 
    cookies.remove("nombre",{path:"/"}) 
    cookies.remove("identificacion",{path:"/"}) 
    cookies.remove("destino",{path:"/"}) 
    cookies.remove("nivel",{path:"/"}) 
    cookies.remove("estado",{path:"/"}) 
    cookies.remove("createdAt",{path:"/"}) 
    cookies.remove("updatedAt",{path:"/"}) 
   
}
export default removeCokies;