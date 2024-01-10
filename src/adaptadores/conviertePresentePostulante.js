import ObtieneDatosCookies from "../obtieneDatosCookiesUsuario";

const conviertePresentePostulante=(data)=>{
  const usuario=ObtieneDatosCookies()

    return {
      
            idInscripto:data.id,
            dniInscripto:data.dni,
            apellidoInscripto:data.apellido,
            nombresInscripto:data.nombres,
            generoInscripto:data.genero,
            idUsuario:usuario.id,
            idSede:usuario.sedeID
                 
            
    }
}
export default conviertePresentePostulante;