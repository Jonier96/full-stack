 var texto = "hernando";

 var reemplazos = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
 };

 function reemplazarVocal(vocal){
    return reemplazos[vocal];
 }

 var resultado = texto.replace(/[aeiou]/g,reemplazarVocal);

console.log(resultado);
