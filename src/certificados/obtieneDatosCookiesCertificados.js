import Cookies from 'universal-cookie';
const cookies =new Cookies;

const obtieneDatosCookiesCertificados=()=>{
    
const datos=
{ "idCertificado":cookies.get('idCertificado',{path:"/"}),
  "dniCertificado":cookies.get('dniCertificado',{path:"/"}),
  "apellidoNombre":cookies.get('apellidoNombre',{path:"/"}),
  "tituloCertificado":cookies.get('tituloCertificado',{path:"/"}),
  "ciudadCertificado":cookies.get('ciudadCertificado',{path:"/"}),
  "fechaciudadCertificado":cookies.get('fechaciudadCertificado',{path:"/"}),
  "escudo1":cookies.get('escudo1',{path:"/"}),
  "escudo2":cookies.get('escudo2',{path:"/"}),
  "fechacursado":cookies.get('fechacursado',{path:"/"}),
  "horascursado":cookies.get('horascursado',{path:"/"}),
  "sedeCertificado":cookies.get('sedeCertificado',{path:"/"}),
  "resolucionCertificado":cookies.get('resolucionCertificado',{path:"/"}),
  "grado":cookies.get('grado',{path:"/"}),
  "reginterno":cookies.get('reginterno',{path:"/"}),
  "firmante1":cookies.get('firmante1',{path:"/"}),
  "firmante1jer":cookies.get('firmante1jer',{path:"/"}),
  "firmante1cargo":cookies.get('firmante1cargo',{path:"/"}),
  "firmante2":cookies.get('firmante2',{path:"/"}),
  "firmante2jer":cookies.get('firmante1jer',{path:"/"}),
  "firmante2cargo":cookies.get('firmante1cargo',{path:"/"}),


}

   return datos;
      
}
export default obtieneDatosCookiesCertificados;