const bcrypt=require('bcryptjs')

const compare=async(passwordPlain, hashPassword)=>
{
    return await bcrypt.compare(passwordPlain,hashPassword)
}
export default compare