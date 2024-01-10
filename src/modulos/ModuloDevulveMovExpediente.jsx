import React, { useState, useEffect } from 'react';
import ObtieneDatosCookies from '../tools/obtieneDatosCookiesUsuario';
import devuelveDependenciaConstultada from '../tools/devuelveDependencia'

export default function DevuelveMovimiento(props) {
  
  const movimiento=props.dato
  const[transito,setTransito]=useState(false)
  const usuario=ObtieneDatosCookies()
  if (!movimiento) {
    return (
    <div style={{"font-weight": "800","font-size":"36px"}}>"Sin movimientos aun"</div>)
  }
const date=new Date(movimiento.fechaSalida)
const fechaInicio=new Date("01/01/2022")
const date2=new Date(movimiento.fechaEntrada)
  return (
    <div>
      <div classname="contenedor_Expediente">
        <h4>Ultimo Movimiento:</h4>
      </div>
<td style={{"text-align": "left"}}>
 
  <li style={{"font-weight": "800"}}>Proveniente de: <a style={{"font-weight": "100"}}>
  {devuelveDependenciaConstultada().filter(categoria=>categoria.id==movimiento.destinoSalidaID)[0].descripcion}
    </a></li>
    <li style={{"font-weight": "800"}}>en fecha: <a style={{"font-weight": "100"}}>
  {date.toLocaleDateString()}
    </a></li>
    <li style={{"font-weight": "800"}}>Observacion: <a style={{"font-weight": "100"}}>
  {movimiento.comentario?movimiento.comentario:"-"}
    </a></li>
   
    <li style={{"font-weight": "800"}}>Destino Actual de: <a style={{"font-weight": "100"}}>
  {movimiento.destinoEntradaID?devuelveDependenciaConstultada().filter(categoria=>categoria.id==movimiento.destinoEntradaID)[0].descripcion:"En transito"}
    </a></li>
    <li style={{"font-weight": "800"}}>desde fecha: <a style={{"font-weight": "100"}}>
  {date2>fechaInicio?date2.toLocaleDateString():"-"}
    </a></li>
    
  </td>
  <div>
    </div>


 </div>
  );
}


