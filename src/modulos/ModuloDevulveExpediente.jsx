import React, { useState, useEffect } from 'react';
import ObtieneDatosCookies from '../tools/obtieneDatosCookiesUsuario';
import devuelveSedeConsultada from '..//tools/devuelveSede'
import devuelveDependenciaConstultada from '../tools/devuelveDependencia'
import ModuloDevulveMovExpediente from '../modulos/ModuloDevulveMovExpediente';
import EditaExpediente from '../tools/EditaExpediente';
import seteaCokieExpediente from '../tools/seteaCokieExpediente';
export default function App(props) {
  const expediente=props.infoExpediente
  const heredo=props.infoMovExpediente
  const usuario=ObtieneDatosCookies()
  
 
  const editaExpedienteProvincia=()=>{
alert("Edita che")
   

    }

  const abreExpedienteProvincia=()=>{

const patronExpediente=/(?:\d{5}|\(\d{3}\))([-\/\.])\d{7}\1\d{1}/
const variable=expediente.idExpMinisterio
const sede=variable.slice(0,5)
const idExpedientemin=variable.slice(6,13)
const digito=variable.slice(14)

  window.open("https://www.santafe.gov.ar/expedientes-web/sie?mesa="+sede+"&numero="+idExpedientemin+"&digito="+digito+"&tipoSIE=1&iniciar=Buscar")
}

if(expediente===false){
  return "Expediente no encontrado!"
}

  if (!expediente) {return ""}
const imprimeCaratula=async()=>{
  await seteaCokieExpediente(expediente).then(window.open('/imprime'))
}
  return (
    <div>
      <div classname="contenedor_Expediente">
        <h4>Expediente:{"00"}{expediente.dependenciaID}{"-"} {expediente.id}{"-"}{"00"}{expediente.sedeID}</h4>
      </div>
<td style={{"text-align": "left"}}>
  <li style={{"font-weight": "800"}}>Contepto: <a style={{"font-weight": "100"}}>{expediente.concepto}</a></li>
  <li style={{"font-weight": "800"}}>Sede de inicio: {devuelveSedeConsultada().filter(categoria=>categoria.id==expediente.sedeID)[0].descripcion}</li>
  <li style={{"font-weight": "800"}}>Dependencia de inicio: {devuelveDependenciaConstultada().filter(categoria=>categoria.id==expediente.dependenciaID)[0].descripcion}</li>
  <li style={{"font-weight": "800"}}>Tiene inicio en otro expediente en una Sectretaria del ISeP: <a style={{"font-weight": "100"}}>{" "}{expediente.idExpSecretaria?"SI bajo Nro: "+expediente.idExpSecretaria:"NO"}</a></li>
  <li style={{"font-weight": "800"}}>Identificador de expediente del Ministerio: <a style={{"font-weight": "100"}}>{" "}{expediente.idExpMinisterio?(expediente.idExpMinisterio+" de fecha:  " + (expediente.fechaMinisterio==!null?expediente.fechaMinisterio==!null:"No se registra fecha aún")):"NO POSEE"}</a><p>{expediente.idExpMinisterio?(<button onClick={abreExpedienteProvincia}>Consultar Expediente Ministerial</button>):<button onClick={editaExpedienteProvincia}>Ingresar Valor</button>}</p>
  <p>{usuario.destino=="6"?(<button onClick={imprimeCaratula}>Volver a Imprimir Caratula</button>):""}</p>
  </li>


  </td>      
  
  <div>

  <ModuloDevulveMovExpediente dato={heredo}/>

  {usuario.destino=="6"&&(<EditaExpediente datos={expediente}/>)}
    </div>


 </div>
  );
}


