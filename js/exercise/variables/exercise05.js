/*Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos . 
El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros.*/

let kilometros= parseFloat(prompt("Enter the Km tours"))
let litros = parseInt(prompt("Enter the litros consumed"))
let gastorPorKm= kilometros / litros
console.log(gastorPorKm);
