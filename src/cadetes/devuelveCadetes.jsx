import Cookies from 'universal-cookie';
import { Table } from "reactstrap";
function ModuloDevuelveCadetes (props) {
  const cookies=new Cookies();
var cantidad=1;
    const usuarioComun = (
<>

     </>
    );
    const usuarioPrivilegios = (

      <>
<Table className="table-primary" bordered  size="sm">
<tr >
      <th>
        #
      </th>
      <th>
        DNI
      </th>
      <th>
        Nombres
      </th>
      <th>
       Apellido
      </th>
      <th>
       Editar
      </th>
    </tr>
     
      {!props.cosas?"":props.cosas.map((cosas) =><>
 
      <tr   key={cosas.id} >
   
      <th scope="row">
     {cantidad++}
     
      </th>
      
      <th>
      {cosas.cadeteDni}
      </th>
      <th>
      { cosas.cadeteNombre}
      </th>
      <th>
      { cosas.cadeteApellido}
      </th>
      
      <button className='btn btn-success' onClick={()=>props.myID(cosas)}>
       X </button>
      </tr>
</>)}
      </Table></>

  );  
  return (
    <div>
      
     {cookies.get('nivel',{path:"/"})<=3?usuarioPrivilegios:usuarioComun}
   
    </div>
  );
};
export default ModuloDevuelveCadetes;
