import React from 'react';
import './generaLegajo.css';


import devuelveDepartamento from '../tools/devuelveDepartamento';
import devuelveProvincia from '../tools/devuelveProvincia';
import regresaBienFecha from '../tools/regresaBienFecha';
import {Document, Page, View,Text,Image} from '@react-pdf/renderer';
import ImagenQR from '../tools/imagenQR';
import LogoIsep from '../imagenes/escudoIseP.png'
import devuelveParametros from '../Ingresos/obtieneDatosPostulante'


function Legajo() {
  const parametro= devuelveParametros()
  const nombreArchivo = 'Número de Legajo de Inscripción (NLI): '+ parametro.id+"-"+parametro.dni+"-2024EP";

  return (
        <>
      <Document  title={nombreArchivo}>
        <Page size="A4" orientation='portrait'>
          <View style={{alignSelf:"right", marginTop:"5px", padding:"15px", fontSize:"8px"}}> 
          <Text >
         Fecha de inscripcion:{regresaBienFecha(parametro.creado)} 
          </Text>
          </View>
        <View id="EscudoIseP"style={{alignSelf:"center", height:"75px", width:"75px", marginTop:"-10px"}}>
        <Image src={LogoIsep}/></View>
        <Text id='nombre escuela' style={{alignSelf:"center", marginTop:"-15px", padding:"15px", fontSize:"12px"}}>Instituto de Seguridad Pública</Text>
        <Text style={{alignSelf:"center", marginTop:"-10px",fontSize:"10px"}}>Pre inscripción Carrera Técnico Superior en Seguridad Pública y Ciudadána - ciclo 2024-2025</Text>
        <Text style={{alignSelf:"center", marginTop:"5px"}}>{nombreArchivo}</Text>
        <Text style={{textAlign:"center", fontSize:"8px",color:"rgb(158, 28, 16)"}} >{parametro.modificado!==parametro.creado?"Legajo actualizado en fecha: "+regresaBienFecha(parametro.modificado):""}</Text>
        <View className="Legajo"style={{ margin:"20px"}}>
        <View className='datosPersonales_legajo' style={{textAlign:"left",fontSize:"11px",margin:"10px", color:"rgb(74, 74, 74)"}}>
  
    <Text className='sub_titulo_legajo'  style={{fontSize:"18px",color:"black"}}>Datos Personales:</Text>
    <Text>Tipo y Nro. de documento: <Text style={{color:"black"}}>{" "}{parametro.dni}</Text></Text>
    <Text>número de Cuil:<Text style={{color:"black"}}>{" "}{parametro.cuil}</Text></Text>
    <Text>Género: <Text style={{color:"black"}}>{" "}{parametro.genero}</Text></Text>
    <Text>Apellido y Nombres: <Text style={{color:"black"}}>{parametro.apellido + ", "+parametro.nombres}</Text></Text>
    <Text>Fecha de Nacimiento:<Text style={{color:"black"}}>{" "}{regresaBienFecha(parametro.fechaDeNacimiento)}</Text></Text>
    <Text>Argentino/a nativo/a o por opción:<Text style={{color:"black"}}>{" "} {parametro.argentinoNativo}</Text></Text>
    {parametro.argentinoNativo==="NO"?<Text>Provincia de Nacimiento:<Text style={{color:"black"}}>{" "} {"--"}</Text></Text>:<Text>Provincia de Nacimiento:<Text style={{color:"black"}}>{" "} {devuelveProvincia(parametro.provinciaNacimiento)[0].Provincia}</Text></Text>}

    <Text >Localidad de Nacimiento:<Text style={{color:"black"}}>{" "}{parametro.localidad}</Text></Text>
    <Text>Apellido y Nombre Madre:<Text style={{color:"black"}}>{" "}{parametro.apellidoNombreMadre}</Text></Text>
    <Text>Apellido y Nombre Padre:<Text style={{color:"black"}}>{" "}{parametro.apellidoNombrePadre}</Text></Text>
  </View>


   <View className='DomiciolioDatosContacto_legajo' style={{textAlign:"left",fontSize:"11px",margin:"10px",color:"rgb(74, 74, 74)"}}>
  
    <Text className='sub_titulo_legajo' style={{fontSize:"18px",color:"black"}}>Domicilio y datos de Contacto:</Text>
    <Text>Reside en Santa Fe: {parametro.resideProvincia==="NO"? <Text style={{color:"black"}}>No, reside en la Prov. de: {devuelveProvincia(parametro.noResideProvincia)[0].Provincia}</Text>:<Text style={{color:"black"}}>Si</Text>} </Text>
    <Text>Localidad: <Text style={{color:"black"}}>{parametro.localidad}</Text></Text>
    {parametro.resideProvincia=="NO"?(<Text>Departamento:<Text style={{color:"black"}}>{"--"}</Text></Text>):<Text>Departamento:<Text style={{color:"black"}}>{" "+devuelveDepartamento(parametro.departamento)}</Text></Text>}
    <Text>Domicilio:<Text style={{color:"black"}}> {parametro.domicilio}</Text></Text>
       <Text>Teléfono:<Text style={{color:"black"}}> {parametro.telefono_1}</Text></Text>
    <Text>Teléfono Alternativo: <Text style={{color:"black"}}>{parametro.telefono_2!=="null"?parametro.telefono_2:"--"}</Text></Text>
    <Text>E-mail:<Text style={{color:"black"}}>{parametro.email}</Text></Text>
    <Text>Comisaría Jurisdicción:<Text style={{color:"black"}}>{parametro.comisaria}</Text></Text>
  </View>

  <View className='EducacionFormal_legajo' style={{textAlign:"left",fontSize:"11px",margin:"10px",color:"rgb(74, 74, 74)"}}>

  <Text className='sub_titulo_legajo'  style={{fontSize:"18px"}}><Text style={{color:"black"}}>Educación Formal Excluyente:</Text></Text>
  <Text>Título de educación secundaria obtenido: <Text style={{color:"black"}}>{" "+parametro.tituloSecundario}</Text></Text>
  <Text>Fecha de emisión del título SECUNDARIO:<Text style={{color:"black"}}>{" "+regresaBienFecha(parametro.fechaTituloSecundario)}</Text></Text>
  
 
</View>
        
        <View style={{textAlign:"left",fontSize:"11px",margin:"10px",color:"rgb(74, 74, 74)"}}>

<Text>¿Tiene algún cargo de planta permanente en la Administración Pública?:<Text style={{color:"black"}}>{"                                              "+parametro.pregunta1}</Text></Text>

<Text>¿Fue destituido, cesanteado o exonerado en cualquiera de los niveles de la Administración Pública?: <Text style={{color:"black"}}>{" "+parametro.pregunta2}</Text></Text>

<Text>¿Ha sido condenado por la justicia Provincial o Nacional por delitos o contravenciones?:<Text style={{color:"black"}}>{"                      "+parametro.pregunta3}</Text></Text>

<Text>¿Se encuentra procesado por la justicia Provincial o Nacional?:<Text style={{color:"black"}}> {"                                                             "+parametro.pregunta4}  </Text></Text>
<Text className='advertencia_cierre' style={
    {
      textAlign:"center",fontSize:"12px", color:"red",padding:"10px"
    }
    }>
   Recuerde que la inscripción se completará una vez entregada la totalidad de la documental requerida, en hora, fecha y sede que se asignará en publicación de la Página Web una vez cerrada la etapa de Pre Inscripción.
 
  </Text>
</View>
<View id="QR"style={{ alignSelf:"right", marginLeft:" 120px"}}>       
    <ImagenQR direccion={"-"+parametro.id+"-"+parametro.dni+"/2024EP"} tamaño="100"/></View>
  <Text className='firma' style={{textAlign:"right",fontSize:"11px",marginRight:"125px",marginTop:"-25px"}}>

  Firma y Aclaración
  </Text>
  

  </View>

  
  
        </Page>

      </Document>


      </>
    );
  }
export default Legajo



