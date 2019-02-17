
// a- Codificar una función que recibe una cadena de números y devuelve los números primos de la cadena, ordenados de mayor a menor.
// Ejemplo:
// obtenerPrimos([6,4,3,7,3,8,11])
// salida: [11,7,3,3]

let primos = [6,4,3,7,3,8,11]


let lista = [7, 2, 5, 20, 11, 9]; 
 let temp = 0; 
 let Mayor = 0; 
 let num = []; 
 lista.sort (function(a, b) {return b - a}); 
 for (let j = 0; j < lista.length; j ++) { 
 for (let i = 2; i <lista [j]; i ++) { 
 if(lista [j]% i == 0) { 
 temp = temp + 1; 
 } 
 } 
 if(temp> 0) { 
 
 } else { 
    num[j]=lista[j];

  } 
 temp = 0; 
 } 
 alert  ('Los numeros ' + num + ' son primos'); 


 //segundo punto
//  var palabras = $("#letras").val();


 
// $("#envio").on("click", function(){
//     var palabras = $("#letras").val();
//     var test = palabras.sort(function(a,b) {return b-a});
//     alert (test)

   
// });



// let  vacio = [];

// function ordenar(){
    
//     let letras = document.getElementById("letras").value ;
//     let mostrar = document.getElementById("mostrar");
//     vacio = letras.split("").sort().reverse().join("");
//     mostrar.innerHTML = vacio;
     
    
// }


