/*Se trata de escribir un script que diga si un número es par o es impar.
Recordemos que un número es par si al dividirlo por 2 da como resto 0.*/

let num = prompt("Enter num int")
if ( num % 2 ===0){
    alert("Is number par")
}
alert("is number impar")

//Other solution
let numero = 18
let resto = numero%2;
if (resto === 0){
    alert(numero+" es par");
}
else{
    alert(numero+" es impar");
}