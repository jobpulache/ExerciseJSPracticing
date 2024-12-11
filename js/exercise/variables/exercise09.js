/*Este ejercicio es todo un clásico si lo haces a la primera y 
sin tardar mucho, puedes estar seguro: entiendes las variables.
Teiens que escribir un programa que intercambie el valor de dos variables.
 Al final la primera variable debe terner el valor de la segunda y la segunda el valor de la primera. 
 No vale usar arrays ni asignación múltiple*/
var varOne =prompt("Enter the first Value")
var varTwo = prompt("Enter the Second Value")
console.log(`var one es ${varOne}`);
console.log(`var two is ${varTwo}`);
var aux;
aux = varOne

varOne = varTwo
varTwo = aux
console.log(`var uno es ${varOne}`);
console.log(`var dos es ${varTwo}`);







