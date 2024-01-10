import React from 'react';
import devuelveDepartamento from './devuelveDepartamento';
import devuelveProvincia from './devuelveProvincia';
import {Document, Page, View,Text, PDFViewer,Image} from '@react-pdf/renderer';
import ImagenQR from '../tools/imagenQR';
import Logo from '../imagenes/escudoIseP.png'
import Cookies from 'universal-cookie';


function Legajo() {
 

  const cookies=new Cookies();
 
  const ID=cookies.get('id');

  const parametro={}
       

      return (
      <PDFViewer showToolbar="false" style={{width:"100%",height:"100vh"}} >
      <Document  title={"Expediente "} >
        <Page size="A4" orientation='landscape'>
        <View id="Escudo"style={{alignSelf:"center", height:"75px", width:"75px", marginTop:"10px"}}>
        <Image src={Logo}/></View>
        <Text id='nombre escuela' style={{alignSelf:"center", marginTop:"-5px"}}>
          Instituto de Seguridad Pública</Text>
        <View className="Legajo"style={{ margin:"50px"}}>
        <View className='datosPersonales_legajo' style={{textAlign:"left",fontSize:"11px",margin:"10px"}}>

        

    
    <Text className='sub_titulo_legajo'>Domicilio y datos de Contacto:</Text>
    <Text>Reside en Santa Fe: {parametro.resideProvincia} {parametro.noResideProvincia}</Text>
    <Text>Departamento:{devuelveDepartamento("01")[0].Departamento}</Text>
   
    <Text>domicilio: {parametro.domicilio}</Text>
    <Text>Provincia de Nacimiento: {devuelveProvincia("01")[0].Provincia}</Text>
    <Text>Departamento:{devuelveDepartamento("01")[0].Departamento}</Text>
    <Text>Teléfono: {parametro.telefono_1}</Text>
    <Text>Teléfono Alternativo: {parametro.telefono_2}</Text>
    <Text>E-mail:{parametro.email}</Text>
    <Text>Comisaría Jurisdicción:{parametro.comisaria}</Text>
  </View>
    
        
        <View style={{textAlign:"left",fontSize:"11px",margin:"10px"}}>

<Text>¿Tiene algún cargo de planta permanente en la Administración Pública?:{parametro.pregunta1}</Text>

<Text>¿Fue destituido, cesanteado o exonerado en cualquiera de los niveles de la Administración Pública?: {parametro.pregunta2}</Text>

<Text>¿Ha sido condenado por la justicia Provincial o Nacional por delitos o contravenciones?:{parametro.pregunta3}</Text>

<Text>¿Se encuentra procesado por la justicia Provincial o Nacional?: {parametro.pregunta4}  </Text>

</View>
<View id="QR"style={{ alignSelf:"center", margin:" 0px 650px 0px 0px "}}>       
    <ImagenQR direccion="30548471&2023SJ&cXXv" tamaño="100"/></View>
  <Text className='firma' style={{textAlign:"right",fontSize:"11px",marginRight:"125px"}}>

  Firma y Aclaracion
  </Text>
  

  </View>

  <Text className='advertencia_cierre' style={
    {
      textAlign:"center",fontSize:"11px", color:"red",padding:"10px", marginTop:"-250px"
    }
    }>
   Recuerde que la inscripción se completará una vez entregada la totalidad de la documental requerida, en hora, fecha y sede que se asignará en publicación de la Página Web una vez cerrada la etapa de Pre Inscripción.
 
  </Text>
  
        </Page>
      </Document>
      </PDFViewer>

    );
  }
export default Legajo