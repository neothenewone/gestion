
try{
const objeto=estaAbierto.data;
let femeninos=0;
let masculinos=0;
let X=0;
let LaCapital=0;
let Rosario=0;
let Belgrano=0;
let Caseros=0;
let Castellanos=0;
let Constitución=0;
let Garay=0;        
let GeneralLopez=0;  
let GeneralObligado=0;
let Iriondo=0;
let LasColonias=0;   
let NueveDeJulio=0;
let SanCristobal=0;  
let SanJavier=0;  
let SanJeronimo=0;
let SanJusto=0;
let SanLorenzo=0;
let SanMartin=0;     
let Vera=0;
     

console.log("en el consolo"+objeto[0].data)
  for (const [key, value] of Object.entries(objeto)) {
          
   
switch (value.departamento) {
case "01":
LaCapital++
break;
case "02":
Rosario++
break;
case "03":
Belgrano++
break;
case "04":
Caseros++
break;
case "05":
Castellanos++
break;
case "06":
Constitución++
break;
case "07":
Garay++
break;
case "08":
GeneralLopez++
break;
case "09":
GeneralObligado++
break;
case "10":
Iriondo++
break;
case "11":
  LasColonias++
  break;
case "12":
  NueveDeJulio++
  break;
case "13":
  SanCristobal++
  break;
case "14":
  SanJavier++
  break;
case "15":
  SanJeronimo++
  break;
  case "16":
    SanJusto++
    break;
  case "17":
    SanLorenzo++
    break;
  case "18":
    SanMartin++
    break;
  case "19":
    Vera++
    break;
  
default:
console.log("Departamento no encontrado");
break;
}
    if(value.genero==="Femenino"){
    femeninos++
   }else{
    if(value.genero==="Masculino")
  {
    masculinos++

  } else{
    X++
  }
  }
  }
  cookies.set('cantidad',objeto.length, {path:"/"})
  cookies.set('femeninos',femeninos, {path:"/"})
  cookies.set('masculinos',masculinos, {path:"/"})
  cookies.set('X',X, {path:"/"})
  cookies.set('LaCapital',LaCapital, {path:"/"})
  cookies.set('Rosario',Rosario, {path:"/"})
  cookies.set('Belgrano',Belgrano, {path:"/"})
  cookies.set('Caseros',Caseros, {path:"/"})
  cookies.set('Castellanos',Castellanos, {path:"/"})
  cookies.set('Constitución',Constitución, {path:"/"})
  cookies.set('Garay',Garay, {path:"/"})
  cookies.set('GeneralLopez',GeneralLopez, {path:"/"})
  cookies.set('GeneralObligado',GeneralObligado, {path:"/"})
  cookies.set('Iriondo',Iriondo, {path:"/"})
  cookies.set('LasColonias',LasColonias, {path:"/"})
  cookies.set('NueveDeJulio',NueveDeJulio, {path:"/"})
  cookies.set('SanCristobal',SanCristobal, {path:"/"})
  cookies.set('SanJavier',SanJavier, {path:"/"})
  cookies.set('SanJeronimo',SanJeronimo, {path:"/"})
  cookies.set('SanJusto',SanJusto, {path:"/"})
  cookies.set('SanLorenzo',SanLorenzo, {path:"/"})
  cookies.set('SanMartin',SanMartin, {path:"/"})
  cookies.set('Vera',Vera, {path:"/"})
  let dia = new Date
let hora;
let minutos;
if(dia.getHours()<10){
hora="0"+dia.getHours()

}else{
hora=dia.getHours()
}
if(dia.getMinutes()<10){
minutos="0"+dia.getMinutes()

}else{
minutos=dia.getMinutes()
}
const fecha=hora+":"+minutos+" horas del "+ dia.getDate()+"/"+dia.getMonth()+"/"+dia.getFullYear()

cookies.set('fecha',fecha, {path:"/"}) 
console.log(fecha)
  setCargando(false)
 
  if(!cargando){
    navitate('/usuarioLogueado')
  }
  
    } catch (error) {
      console.log("error al cargar")
    }
  
