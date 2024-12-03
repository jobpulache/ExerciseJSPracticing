/*Una tortilla de patatas lleva 200 gramos de papas por persona. Por cada
 kilo de papas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado 
el número de comensales calcule las cantidades de ingredientes necesarias*/

var comensales, papas, huevos, cebolla
comensales = parseInt(prompt("Enter the number comensales"))
papas = comensales*200
papas = papas/1000 //Para convertirlo a Kilos
huevos = papas*5
cebolla = papas*300

console.log("Patatas " + papas+" kilos");     
console.log("Huevos " + huevos);        
console.log("Cebolla "+cebolla +" gramos");


