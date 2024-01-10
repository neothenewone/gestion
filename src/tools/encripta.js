const bcrypt=require('bcryptjs')

const encrypt=async (textPlain)=>{
    const hash=await bcrypt.hash(textPlain,10)
   
    return hash
}

export default encrypt