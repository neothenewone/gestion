
import Cookies from 'universal-cookie';
function ModuloDevuelveCursos (props) {
  const cookies=new Cookies();

    const usuarioComun = (
<>

      <ol>
      {!props.cosas?"":props.cosas.map((cosas) =><div>
      <a onClick={()=>props.myID(cosas.id)}>
      <tr key={cosas.id}> 
        
      <th > 
        {cosas.curso +" "+cosas.api+" "+ cosas.estado}

 </th>
 
       
        <th style={{textAlign:"left"}}> 
        {"("+cosas.escuela+")"}
      
        </th>
        
        </tr>
        </a></div>)}
      </ol></>
    );
    const usuarioPrivilegios = (

      <>

      <ol>
      {!props.cosas?"":props.cosas.map((cosas) =><div>
      <button className='btn btn-warning' onClick={()=>props.myID(cosas)}>
      <tr key={cosas.id}> 
        
      <th > 
        {cosas.curso}

 </th>
 
       
      
        
        </tr>
        </button></div>)}
      </ol></>


  );  
  return (
    <div>
      
     {cookies.get('nivel',{path:"/"})<=3?usuarioPrivilegios:usuarioComun}
   
    </div>
  );
};
export default ModuloDevuelveCursos;
