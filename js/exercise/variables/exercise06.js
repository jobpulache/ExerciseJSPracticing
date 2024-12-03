/*Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 60 minutos y cada minuto son 60 segundos*/

let horas = parseInt(prompt("Enter the hours"))
let minutos =parseInt(prompt("Enter the minutes"))
let segundos = horas*60*60 + minutos*60

console.log(segundos);

