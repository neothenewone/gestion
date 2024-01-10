import Cookies from 'universal-cookie';
const cookies =new Cookies;

const seteaCokieCertificado=async(respuesta)=>{
console.log(respuesta)
    cookies.set("idCertificado",respuesta.idCertificado, {path:"/"}) 
    cookies.set("dniCertificado",respuesta.dniCertificado, {path:"/"}) 
    cookies.set("apellidoNombre",respuesta.apellidoNombre, {path:"/"}) 
    cookies.set("tituloCertificado",respuesta.tituloCertificado, {path:"/"}) 
    cookies.set("ciudadCertificado",respuesta.ciudadCertificado, {path:"/"}) 
    cookies.set("fechaciudadCertificado",respuesta.fechaciudadCertificado, {path:"/"}) 
    cookies.set("escudo1",respuesta.escudo1, {path:"/"}) 
    cookies.set("escudo2",respuesta.escudo2, {path:"/"}) 
    cookies.set("fechacursado",respuesta.fechacursado, {path:"/"}) 
    cookies.set("horascursado",respuesta.horascursado, {path:"/"}) 
    cookies.set("sedeCertificado",respuesta.sedeCertificado, {path:"/"}) 
    cookies.set("resolucionCertificado",respuesta.resolucionCertificado, {path:"/"}) 
    cookies.set("grado",respuesta.grado, {path:"/"}) 
    cookies.set("reginterno",respuesta.reginterno, {path:"/"}) 
    cookies.set("firmante1",respuesta.firmante1, {path:"/"}) 
    cookies.set("firmante1jer",respuesta.firmante1jer, {path:"/"}) 
    cookies.set("firmante1cargo",respuesta.firmante1cargo, {path:"/"}) 
    cookies.set("firmante2",respuesta.firmante2, {path:"/"}) 
    cookies.set("firmante2jer",respuesta.firmante2jer, {path:"/"}) 
    cookies.set("firmante2cargo",respuesta.firmante2cargo, {path:"/"}) 
    
      
}
export default seteaCokieCertificado;