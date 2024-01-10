import React from 'react';
import {Document, Page, View,Text, PDFViewer,Image} from '@react-pdf/renderer';
import ImagenQR from '../tools/imagenQR';
import Logo from '../imagenes/escudoIseP.png'
import escPol from '../imagenes/escPol.png'
import escEsp from '../imagenes/escEsp.png'
import escSup from '../imagenes/escSup.png'
import escInv from '../imagenes/escInv.png'
import logoProvincia from '../certificados/logoProvincia2024.jpg'
import textoIsep from '../certificados/textoIsep2024.jpg'
import Cookies from 'universal-cookie';
import ObtieneDatosCookiesCertificados from '../certificados/obtieneDatosCookiesCertificados';



function Certificado() {
 

  const cookies=new Cookies();
 
  

  const datosVarios=  ObtieneDatosCookiesCertificados() 
 const direccion="puto el que lee"

       return (
      <PDFViewer showToolbar="false" style={{width:"100%",height:"100vh"}} >
      <Document  title={"Certificado "+datosVarios.apellidoNombre} >
        <Page size="A4" orientation='landscape' style={{"display":"flex"}}>
        <View style={{display:""}}>
        
        </View>
        <View id="Logos"style={{ alignSelf:"center", width:"100%", marginTop:"10px"}}>
        <Image style={{width:"350px" }}src={logoProvincia}/>  <Image style={{width:"300px"}} src={textoIsep}/>

       </View>
       
        
        <View className='datosPersonales_legajo' style={{textAlign:"center",fontSize:"20px",margin:"25px",padding:"25px"}}>

    <Text className='sub_titulo_legajo'>Se le expide el presente certificado a</Text>
    <Text >{datosVarios.apellidoNombre+" "} NI N° {datosVarios.dniCertificado}</Text>
    <Text>Por haber finalizado satisfactoriamente las exigencias del curso extracurricular</Text>
    <Text>de </Text>
    <Text style={{ alignSelf:"center",  width:"500px", marginTop:"10px"}}>{datosVarios.tituloCertificado}</Text>
    <Text>{datosVarios.ciudadCertificado+", "+datosVarios.fechaciudadCertificado}</Text>
    
    <View> <Text style={{transform: "rotate(270deg)",alignSelf:"left"}}>Reg Interno:{datosVarios.reginterno} </Text></View></View>
    {datosVarios.escudo2=="escPol"?(<View id="Escudo"style={{ alignSelf:"center", height:"10%", width:"10%", marginTop:"10px"}}><Image style={{width:"300px"}} src={escPol}/></View>):""}

    {datosVarios.escudo2=="escEsp"?(<View id="Escudo"style={{ alignSelf:"center", height:"10%", width:"10%", marginTop:"10px"}}><Image style={{width:"300px"}} src={escEsp}/></View>):""}


    <View> 
      <Text>Cursado: {datosVarios.fechacursado}</Text>
      <Text>Horas:{datosVarios.horascursado}</Text>
      <Text>Sede:{datosVarios.sedeCertificado}</Text>
      <Text>Resolución:{datosVarios.resolucionCertificado}</Text>
      <Text>Grado:{datosVarios.grado}</Text>
      </View>
      <View className="firma 1"> 
      <Text>{datosVarios.firmante1}</Text>
      <Text>{datosVarios.firmante1cargo}</Text>
      <Text>{datosVarios.firmante1jer}</Text>
     
      </View>
      <View className="firma 2"> 
      <Text>{datosVarios.firmante2}</Text>
      <Text>{datosVarios.firmante2cargo}</Text>
      <Text>{datosVarios.firmante2jer}</Text>
     
      </View>
    <View className='datosPersonales_legajo' style={{textAlign:"left",fontSize:"12px"}}>
    
    
  
    
        
        <View style={{textAlign:"left",fontSize:"11px",margin:"10px"}}>


  
</View>
<View id="QR"style={{ alignSelf:"center"}}>       
    <ImagenQR direccion={direccion} tamaño="100"/></View>
  
  

  </View>

  
        </Page>
      </Document>
      </PDFViewer>

    );
  }
export default Certificado