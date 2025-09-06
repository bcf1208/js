
import { getFactorial } from "./funciones.js";

document.addEventListener("DOMContentLoaded",function(){
        
    let txtNumero=document.getElementById("txtNumero");
    let txtResFactorial=document.getElementById("txtResFactorial");
    let btnFactorial=document.getElementById("btnFactorial");
    
    btnFactorial.addEventListener("click",function(){
        txtResFactorial.value=getFactorial(txtNumero.value);
    });

});