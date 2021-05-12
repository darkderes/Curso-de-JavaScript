
// funcion anonimas es una funcion sin nombre
var pelicula = function(nombre){

    return "La pelicula es " + nombre;
}

function sumame(numero1,numero,sumaYmuestra,sumaPorDos)
{
   var sumar = numero1 + numero2; 
    sumaYmuestra(sumar);
    sumaPorDos(sumar);

   return sumar;
}

sumame(5,1,function(dato){
    console.log("La suma es:",dato);
},function(dato)
{
    console.log("La suma por 2",(dato * 2));
});



