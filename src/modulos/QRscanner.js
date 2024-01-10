import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import QrScan from 'react-qr-reader'

function QRscanner() {
   
  const navitate = useNavigate()
      
  const cookies=new Cookies();
  const datos={}
         const [qrscan, setQrscan] = useState(true);
         cookies.set("adress","LectorQr", {path:"/LectorQr"}) 
         const handleScan =async data => {
            try {
              if (data) {
                console.log(data)
                cookies.set("dataQR",data, {path:"/LectorQr"}) 
                navitate('/editaExpediente')
                   
               }
            } catch (error) {
              
            }
             
         }
         const handleError = err => {
         console.error(err)
         }
     
         return (
           <div>
                
                 <span>Lector QR de Expedientes</span>
               
     
                 <center>
                 <div style={{marginTop:30}}>
                 <QrScan
                         delay={300}
                         onError={handleError}
                         onScan={handleScan}
                         style={{ height: 240, width: 320 }}
                     />
                 </div>

                
                 </center>
     
                
           </div>
         );
       }
       
       export default QRscanner;
