import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import './usuarios.css';
import devuelveDependenciaConstultada from '../tools/devuelveDependencia';
function ModuloDevuelveUsuarios (props) {
  const cookies=new Cookies();
  const navitate = useNavigate();


    const sidebar = (

        <table>
           <tr>
            <th style={{"font-weight": "800", "scope":"row"}}>Nombre y apellido </th> 
            <th style={{"font-weight": "800"}}>Destino </th>
            <th style={{"font-weight": "800", "scope":"row"}}>Anular</th> 
           
            </tr>
        {props.cosas.map((cosas) =>
          <tr key={cosas.id}>
            
          <th> {cosas.nombre}{" "}
            {cosas.apellido }</th>
           
            <th> 
            {" "}
            {devuelveDependenciaConstultada().filter(categoria=>categoria.id==cosas.destino)[0].descripcion }
            </th> <th> <button className='btn btn-outline-secondary' onClick={()=>props.myID(cosas.id)} >editar</button> </th>
         
          </tr>)} 
          </table>

    );
    

  //const URI='https://wwwa.isepsantafe.edu.ar/expedientes/usuarios/'
  
 
  
  


 
  
  
  return (
    <div>
     
     {sidebar}
     
      
    </div>
  );
};
export default ModuloDevuelveUsuarios;
