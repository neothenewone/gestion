import Cookies from 'universal-cookie';

const obtieneDatosPostulante=()=>{
    const cookies=new Cookies();
const parametro={
    "id":cookies.get('id'),
    "dni":cookies.get('dni'),
    "email":cookies.get('email'),
    "cuil":cookies.get('cuil,',{path:"/"}),
    "nombres":cookies.get('nombres',{path:"/"}),
    "apellido":cookies.get('apellido',{path:"/"}),
    "genero":cookies.get('genero',{path:"/"}),
    "estadoCivil":cookies.get('estadoCivil',{path:"/"}),
    "fechaDeNacimiento":cookies.get('fechaDeNacimiento',{path:"/"}),
    "argentinoNativo":cookies.get('argentinoNativo',{path:"/"}),
    "provinciaNacimiento":cookies.get('provinciaNacimiento',{path:"/"}),
    "lugarDeNacimiento":cookies.get('lugarDeNacimiento',{path:"/"}),
    "apellidoNombreMadre":cookies.get('apellidoNombreMadre',{path:"/"}),
    "apellidoNombrePadre":cookies.get('apellidoNombrePadre',{path:"/"}),    
    "resideProvincia":cookies.get('resideProvincia',{path:"/"}),
    
    "noResideProvincia":cookies.get('noResideProvincia',{path:"/"}),
    "localidad":cookies.get('localidad',{path:"/"}),
    "departamento":cookies.get('departamento',{path:"/"}),
    "domicilio":cookies.get('domicilio',{path:"/"}),
    "telefono_1":cookies.get('telefono_1',{path:"/"}),
    "telefono_2":cookies.get('telefono_2',{path:"/"}),
    "comisaria":cookies.get('comisaria',{path:"/"}),
    "nivelEstudio":cookies.get('nivelEstudio',{path:"/"}),
    "tituloSecundario":cookies.get('tituloSecundario',{path:"/"}),
    "fechaTituloSecundario":cookies.get('fechaTituloSecundario',{path:"/"}),
    "tituloSuperior":cookies.get('tituloSuperior',{path:"/"}),
    "fechaTituloSuperior":cookies.get('fechaTituloSuperior',{path:"/"}),
    "pregunta1":cookies.get('pregunta1',{path:"/"}),
    "pregunta2":cookies.get('pregunta2',{path:"/"}),
    "pregunta3":cookies.get('pregunta3',{path:"/"}),
    "pregunta4":cookies.get('pregunta4',{path:"/"}),
     "creado":cookies.get('createdAt',{path:"/"}),
     "modificado":cookies.get('updatedAt',{path:"/"}) 
      }
      return parametro
    }
    export default obtieneDatosPostulante