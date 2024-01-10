import ObtieneDatosCookies from "../tools/obtieneDatosCookiesUsuario";

const convierteExpediente=(data,idExpediente)=>{
  const usuario=ObtieneDatosCookies()
    function primeraMayuscula(str) {
     
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    return {
            usuarioID:usuario.id,
            sedeID:usuario.sedeID,
            dependenciaID:usuario.destino,
            idExpSecretaria:data.idExpSecretaria ? data.idExpSecretaria : null,
            iniciador:primeraMayuscula(data.iniciador),
            idCategoria:data.idCategoria,
            concepto:data.concepto,
            idExpMinisterio:data.idExpMinisterio ? data.idExpMinisterio:null,
            fechaMinisterio:data.fechaMinisterio ? data.fechaMinisterio:null,
            
    }
}
export default convierteExpediente;