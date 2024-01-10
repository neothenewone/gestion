import ObtieneDatosCookies from "../tools/obtieneDatosCookiesUsuario";

const convierteCadete=(informacion)=>{
  console.log(informacion);
  const usuario=ObtieneDatosCookies()
    
    

    return {

      cadeteDni: informacion.cadeteDni,
      cadeteApellido: informacion.cadeteApellido,
      cadeteNombre: informacion.cadeteNombre,
      cadeteDomicilio: informacion.cadeteDomicilio,
      cadeteCelular: informacion.cadeteCelular,
      cadeteSede: informacion.cadeteSede,
      estado: informacion.estado,
                       
    }
}
export default convierteCadete;