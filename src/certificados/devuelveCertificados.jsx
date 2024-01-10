import Cookies from 'universal-cookie';
import { Table } from "reactstrap";
function ModuloDevuelveCertificados (props) {
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
        N.I.
      </th>
      <th>
        Apellido y Nombre
      </th>
      <th>
       Titulo
      </th>
      <th>
       Sede
      </th>
      <th>
       Fecha
      </th>
      <th>
       Imprimir
      </th>
    </tr>
     
      {!props.cosas?"":props.cosas.map((cosas) =><>

      <tr   key={cosas.id} >
   
      <th scope="row">
     {cantidad++}
     
      </th>
      
      <th>
      {cosas.dniCertificado}
      </th>
      <th>
      { cosas.apellidoNombre}
      </th>
      <th>
      {cosas.tituloCertificado}
      </th>
      <th>
      { cosas.fechaciudadCertificado}
      </th>
      <th>
      { cosas.sedeCertificado}
      </th>
      <button className='btn btn-success' onClick={()=>props.myID(cosas)}>
       Imprimir </button>
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
export default ModuloDevuelveCertificados;
