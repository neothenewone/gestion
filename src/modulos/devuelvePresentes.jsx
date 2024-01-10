import './usuarios.css';
import devuelveDependenciaConstultada from '../tools/devuelveSede';
import Cookies from 'universal-cookie';
function ModuloDevuelvePresentes (props) {
  const cookies=new Cookies();

    const usuarioComun = (
<>

      <ol>
      {!props.cosas?"":props.cosas.map((cosas) =><div>
      <a onClick={()=>props.myDNI(cosas.dniInscripto)}>
      <tr key={cosas.id}> 
        
      <th > 
        {cosas.dniInscripto + " " +cosas.apellidoInscripto+" "+cosas.nombresInscripto + " " + cosas.generoInscripto + ""}

 </th>
       
        <th style={{textAlign:"left"}}> 
        {"("+devuelveDependenciaConstultada().filter(categoria=>categoria.id==cosas.idSede)[0].descripcion?"("+devuelveDependenciaConstultada().filter(categoria=>categoria.id==cosas.idSede)[0].descripcion+""+")":""}
        </th>
        
        </tr>
        </a></div>)}
      </ol></>
    );
    const usuarioPrivilegios = (

      <>
     
      <ol>
      {!props.cosas?"":props.cosas.map((cosas) =><div>
       <a  onClick={()=>props.myDNI(cosas.dniInscripto)}>
      <tr key={cosas.id}>
        
      <li> {}{""}
        </li>
        <th > 
        {cosas.dniInscripto + " " +cosas.apellidoInscripto+" "+cosas.nombresInscripto + " " + cosas.generoInscripto+ ""}

 </th>
        <th > 
        {"("+devuelveDependenciaConstultada().filter(categoria=>categoria.id==cosas.idSede)[0].descripcion?"("+devuelveDependenciaConstultada().filter(categoria=>categoria.id==cosas.idSede)[0].descripcion+""+")":""}
      
        </th>
        <th > 
 
  
        </th>
         <th> <button style={{textAlign:"center"}} className="btn btn-danger"onClick={()=>props.myID(cosas.idInscripto)} >X</button>  </th>
     
      </tr></a></div>)}
      </ol>
</>

  );  
  return (
    <div>
      
     {cookies.get('nivel',{path:"/"})<=3?usuarioPrivilegios:usuarioComun}
   
    </div>
  );
};
export default ModuloDevuelvePresentes;
