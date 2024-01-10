import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactHtmlParser from 'react-html-parser';
import QRCode from 'qrcode.react';
import devuelveDepartamento from './devuelveDepartamento';
import devuelveProvincia from './devuelveProvincia';
import regresaBienFecha from './regresaBienFecha';
import {Document, Page, View,Text, PDFViewer,Image,Svg, Path } from '@react-pdf/renderer';
import ImagenQR from './imagenQR';
import Logo from './loginBackground2.jpeg'
import Cookies from 'universal-cookie';
const PdfWithQrCode = () => {
    const qrCodeComponent = (
        <QRCode
            value={"ssf_id"}
            renderAs="svg"
            size={80}
        />
    );

    const qrCodeComponentStaticMarkup = renderToStaticMarkup(qrCodeComponent);

    const parsedQrCodeSvg = parseQrCodeMarkup(qrCodeComponentStaticMarkup);
    if (! parsedQrCodeSvg) {
        return null;
    }

    return (
        <PDFViewer showToolbar="false" style={{width:"100%",height:"100vh"}} >
        <Document  title={"Expediente "} >
          <Page size="A4" orientation='landscape'>
          <View className="Legajo"style={{ margin:"50px"}}>
          <View className='datosPersonales_legajo' style={{textAlign:"left",fontSize:"11px",margin:"10px"}}>
  
          <View>

<Svg
    style={{ width: 50, height: 50 }}
    viewBox="0 0 29 29"
>
    {parsedQrCodeSvg.props.children.filter(c => c.type === 'path').map((child, index) => (
        <Path
            key={index}
            d={child.props.d}
            fill={child.props.fill}
        />
    ))}
</Svg>
</View>
  

      <Text className='sub_titulo_legajo'>Domicilio y datos de Contacto:</Text>
      <Text>Reside en Santa Fe: </Text>
      <Text>Departamento:</Text>
     
      <Text>domicilio: </Text>
      <Text>Provincia de Nacimiento: </Text>
      <Text>Departamento:</Text>
      <Text>Teléfono: </Text>
      <Text>Teléfono Alternativo: </Text>
      <Text>E-mail:</Text>
      <Text>Comisaría Jurisdicción:</Text>
    </View>
  
          
          
          <View style={{textAlign:"left",fontSize:"11px",margin:"10px"}}>
  
  
  
  <Text>¿Se encuentra procesado por la justicia Provincial o Nacional?:  </Text>
  
  </View>
  
    </View>
  
    <Text className='advertencia_cierre' style={
      {
        textAlign:"center",fontSize:"11px",margin:"10px", color:"red",padding:"10px"
      }
      }>
     Recuerde que la inscripción se completará una vez entregada la totalidad de la documental requerida, en hora, fecha y sede que se asignará en publicación de la Página Web una vez cerrada la etapa de Pre Inscripción.
   
    </Text>
    <Text className='firma' style={{textAlign:"right",fontSize:"11px",margin:"10px"}}>
  
    Firma y Aclaracion
    </Text>
          </Page>
        </Document>
        </PDFViewer>
  
        
    );
}

const parseQrCodeMarkup = (markup) => {
    let parsedQrCodeSvg = null;

    ReactHtmlParser(markup).forEach(el => {
        const { type } = el;
        if (type === 'svg') {
            parsedQrCodeSvg = el;
        }
    });

    return parsedQrCodeSvg;
};

export default PdfWithQrCode;