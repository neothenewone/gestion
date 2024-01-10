import Cookies from 'universal-cookie';
const cookies =new Cookies;

const ObtieneDatosCookies=()=>{
    
const datos=
{ 
  "id":cookies.get('id'),
  "pass":cookies.get('pass'),
  "nombre":cookies.get('nombre',{path:"/"}),
  "apellido":cookies.get('apellidoUsuario',{path:"/"}),
  "identificacion":cookies.get('identificacion',{path:"/"}),
  "sedeID":cookies.get('sedeID',{path:"/"}),
  "destino":cookies.get('destino',{path:"/"}),
  "nivel":cookies.get('nivel',{path:"/"}),
  "estado":cookies.get('estado',{path:"/"}),
  "createdAt":cookies.get('createdAt',{path:"/"}),
  "updatedAt":cookies.get('updatedAt',{path:"/"})
}

   return datos;
      
}
export default ObtieneDatosCookies;