import { useForm } from 'react-hook-form';
import devuelveCategorias from './devuelveCategorias';

function EditaExpediente (parametro) {
const onSubmit=()=>{
    alert("puto el que lee")
}
const {register, formState: { errors }, watch, handleSubmit,} = useForm({
    defaultValues: parametro//recupero lo que pasa por parametros
    });


    const categorias=devuelveCategorias()
return(   
       <form className='form__formulario' onSubmit={handleSubmit(onSubmit)}>
<section className="datos-personales">
  
  <h3 className="encabezados">Datos Generales</h3>{/* ENCABEZADOS*/}
  <hr />
  <div>
    <h5>Iniciador</h5>
  {errors.titular?.type === 'required' && (
    <span className="aviso_formulario">Es un campo requerido!!!</span>)}
  {errors.titular?.type === 'minLength' && (<span className="aviso_formulario">El apellido debe tener una longitud mayor, controle por favor</span>)}
    <input
    type="text"
    placeholder="Ingrese el apellido del titular" className="input__formulario"
    autoComplete='false'
    maxlength="1024"
    {...register('iniciador', {
      required: true,
      minLength: 3,
    })}/>
  </div>
  <div>
  <h5>Categoria del Expediente</h5>
  {errors.categoria?.type === 'required' && (
    <span className="aviso_form">Es un campo requerido!!!</span>)}
 
    <select
    type="select"
    placeholder="Titular" className="input__formulario"
    autoComplete='false'
    
    {...register('idCategoria', {
      required: true,
    })}>
    {categorias.map((cate) =>
    <><option key={cate.id} value={cate.id}>
    {cate.descripcion}
    </option>
    </>
)}     
     
     
    </select>
  </div>
  
  {errors.descripcion?.type === 'minLength' && (<span className="aviso_formulario">Descripcion muy escueta, amplie por favor</span>)}
  <h5>Descripcion del Expediente</h5>
  {errors.descripcion?.type === 'required' && (
    <span className="aviso_formulario">Debe describir de que trata el expediente ya que es un campo requerido!!!</span>)}
  <textarea
    type="text"
    placeholder="Descripcion del Expediente" className="input__formulario"
    autoComplete='false'
    maxlength="1024"
    {...register('concepto', {
      required: true,
      minLength: 8,
    })}/>
  <div>
  <hr />
    <h5>Expediente Inicial</h5>
  {errors.expedienteInicial?.type === 'required' && (
    <span className="aviso_formulario">Es un campo requerido!!!</span>)}
  {errors.expedienteInicial?.type === 'minLength' && (<span className="aviso_formulario">El apellido debe tener una longitud mayor, controle por favor</span>)}
    <input
    type="text"
    placeholder="Codigo de Expediente Precedente" className="input__formulario"
    autoComplete='false'
    maxlength="1024"
    {...register('idExpSecretaria', {
      minLength: 3,
    })}/>
  </div>
  <div>
  <hr />
    <h5>Expediente Inicial Ministerio</h5>
  {errors.expedienteInicial?.type === 'required' && (
    <span className="aviso_formulario">Es un campo requerido!!!</span>)}
  {errors.expedienteInicial?.type === 'minLength' && (<span className="aviso_formulario">El apellido debe tener una longitud mayor, controle por favor</span>)}
    <input
    type="text"
    placeholder="Codigo de Expediente Ministerio" className="input__formulario"
    autoComplete='false'
    maxlength="1024"
    {...register('idExpMinisterio', {
      minLength: 3,
    })}/>
  </div>
  <div>
    <h5>Fecha Expediente Inicial Ministerio</h5>
  {errors.expedienteInicial?.type === 'required' && (
    <span className="aviso_formulario">Es un campo requerido!!!</span>)}
  {errors.expedienteInicial?.type === 'minLength' && (<span className="aviso_formulario">El apellido debe tener una longitud mayor, controle por favor</span>)}
    <input
    type="date"
    placeholder="Codigo de Expediente Ministerio" className="input__formulario"
    autoComplete='false'
    maxlength="1024"
    {...register('fechaMinisterio', {
      minLength: 3,
    })}/>
  </div>


  <div className="contenedor-boton" >


<input type="submit" value="Finalizar"  className="botonEnviar" />


</div>


</section>

            



</form>)}
export default EditaExpediente;
