import ObtieneDatosCookies from "../tools/obtieneDatosCookiesUsuario";

const convierteLTB=(informacion)=>{
  console.log(informacion);
  const usuario=ObtieneDatosCookies()
    
    

    return {

            idCadete:informacion.id,
            idUsuario:usuario.id,
            idSede:usuario.sedeID,
            motivo:informacion.motivo,
            descripcion:informacion.descripcion
                       
    }
}
export default convierteLTB;