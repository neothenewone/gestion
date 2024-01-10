import ObtieneDatosCookies from "../tools/obtieneDatosCookiesUsuario";

const convierteNuevoMovimiento=(data)=>{
  const usuario=ObtieneDatosCookies()
   console.log(usuario)
      const fecha = new Date();
    return {
            expedienteID:data.id,
            usuarioSalidaID:usuario.id,
            destinoSalidaID:usuario.destino,
            fechaSalida:fecha,
            comentario:""            
            
    }
}
export default convierteNuevoMovimiento;