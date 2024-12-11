/*Pues seguimos con los números. Escribe un script  que dado un número nos devuelva true si es un número par y false si es un número impar. 
No usar condiconales*/

//This is one forma
let num1 = prompt("Enter the value")
num1 % 2 === 0? console.log("true"): console.log("false");
;

//This is another forma
var num = prompt("Enter number int")
var res = num % 2;
var par = res === 0
console.log("es par?" + par);

