import ObtieneDatosCookies from "../tools/obtieneDatosCookiesUsuario";

const convierteActualizaMovimiento=()=>{
  const usuario=ObtieneDatosCookies()
    
      const fecha = new Date();

    return {
            usuarioEntradaID:usuario.id,
            destinoEntradaID:usuario.destino,
            fechaEntrada:fecha
                       
    }
}
export default convierteActualizaMovimiento;