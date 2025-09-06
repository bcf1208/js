
import { getSuma } from "./funciones.js";

document.addEventListener("DOMContentLoaded",function(){
    
    let txtNumero1=document.getElementById("txtNumero1");
    let txtNumero2=document.getElementById("txtNumero2");
    let txtResultado=document.getElementById("txtResultado");
    let btnCalcular=document.getElementById("btnCalcular");
    
    btnCalcular.addEventListener("click",function(){

        txtResultado.value=getSuma(txtNumero1.value,txtNumero2.value);

    });     

});