
import { getFactorial } from "https://cdn.jsdelivr.net/gh/bcf1208/js@main/funciones.js";

document.addEventListener("DOMContentLoaded",function(){
        
    let txtNumero=document.getElementById("txtNumero");
    let txtResFactorial=document.getElementById("txtResFactorial");
    let btnFactorial=document.getElementById("btnFactorial");
    
    btnFactorial.addEventListener("click",function(){
        txtResFactorial.value=getFactorial(txtNumero.value);
    });

});
