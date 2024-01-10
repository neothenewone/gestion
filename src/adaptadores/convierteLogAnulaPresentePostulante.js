import ObtieneDatosCookies from "../tools/obtieneDatosCookiesUsuario";

const convierteLogAnulaPresentePostulante=(data,etapa)=>{
  const usuario=ObtieneDatosCookies()
      
    return {
            idInscripto:data,
            idUsuario:usuario.id,
            etapa:etapa
          
                 
            
    }
}
export default convierteLogAnulaPresentePostulante;