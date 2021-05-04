'use strict'
var numero1 = parseInt(prompt("Introduce el primer numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero",0));
console.log(numero1,numero2);


while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(nuermo2))
{
     numero1 = parseInt(prompt("Introduce el primer numero",0)); 
     numero2 = parseInt(prompt("Introduce el segundo numero",0));
}
if(numero1 == numero2 )
{
    alert("los nuemros son iguales");
}
else
if(numero1 > numero2)
{
    alert("numero1 es mayor es el" + numero1);
    alert("numero es el menor" + numero2);
}
else
if(numero2 > numero1)
{
    alert("numero es mayor es el" + numero2);
    alert("numero es el menor" + numero1);
}
else
{
    alert("Introduce valores numericos");
}

