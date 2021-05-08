//parametros rest y spread

// rest

function lista_frustas(fruta1,fruta2,...resto_de_frutas)// cuando coloco una variable con 3 puntos me duelve un arreglo con todas el resto de parametros declarados
{
    console.log("Fruta 1 : "+ fruta1);
    console.log("Fruta 2 : "+ fruta2);
    console.log("resto de frutas :"+resto_de_frutas)

} 
lista_frustas("pera","nuez","melon","sandia");

//spread

var frutas = ["pera,nuez"]

lista_frustas(...frutas,"melon","sandia");