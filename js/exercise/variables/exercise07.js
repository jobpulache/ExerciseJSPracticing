/*En este script debes pedir al usuario un número de dos dígitos y debes devolver el número de unidades y de decenas, o sea,
 cada dígito del número. Usa solo operationes aritméticas
Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto es el número de unidades*/
let num = parseInt(prompt("Enter number two digit"))
let unidades, decenas   
 unidades = parseInt(num/10)
 decenas = num%10
console.log(`unidades: ${unidades} and decenas ${decenas}` );


