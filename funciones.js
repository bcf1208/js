
export function getSuma(num1,num2){
   let res= parseInt(num1)+parseInt(num2);
   return res;
}

export function getFactorial(num){
    let fact=parseInt(num);
    let n=parseInt(num)-1;

    while(n>=1){
       fact=fact*n;
       n--;
    }
    return fact;
}

export function getPromedio(calf1,calf2,calf3,calf4,calf5,calf6){
     let promedio=(parseFloat(calf1)+parseFloat(calf2)+parseFloat(calf3)+parseFloat(calf4)+parseFloat(calf5)+parseFloat(calf6))/6;
     return promedio;
}