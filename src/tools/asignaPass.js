import encripta from "../tools/encripta"
const asignaPass=async(data)=>{

const passw=await encripta(data)

return {
       pass:passw
}
}
  export default asignaPass;