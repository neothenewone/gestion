import React, {useState} from 'react'
import Cookies from 'universal-cookie';
import QrScan from 'react-qr-reader'
export default function Child(props) {    
    const cookies=new Cookies();
    const datos={}


           const [qrscan, setQrscan] = useState(true);
          
          
           const handleScan =async data => {

               if (data) {
              
                props.direccion(data)
                cookies.set("adress",data, {path:"/"}) 
                const usuario=cookies.get('adress',{path:"/"})
                
            
               }
           }
           const handleError = err => {
           console.error(err)
           }
       

 
    return (
    <React.Fragment>
   
            <div>
                
                         
    
                <center>
                <div style={{marginBottom:"10px"}}>
                <QrScan
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ height: 240, width: 320 }}
                        willReadFrequently={true}
                    />
                </div>

               
                </center>
    
               
          </div>
    </React.Fragment>
  );
}