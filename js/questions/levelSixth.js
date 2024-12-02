//¿Cuál es el valor de x después de ejecutar el siguiente código?
let x = 5;
x += 2;
x *= 3;
//RPTA: 21  
console.log(x);

//¿Qué palabra clave detiene el bucle actual y pasa la primera sentencia después del bucle en un for o un while?
//RPTA: BREAK.

//Si tienes una variable tipo objeto con nombre cuadrado, con una propiedad de nombre lado ¿Cómo se accede a esta propiedad?
//RPTA: Cuadrado.lado

//El valor que toman "b" y "c" al final del programa
const a = [3, 6, 9, 12, 15];
const [b, c] = a;
//RPTA: B=3 AND C= 6 b tomará el primer elemento del arreglo (3). c tomará el segundo elemento del arreglo (6).


//¿Cuál es el resultado de typeof(null) en JavaScript?
//RPTA:  ->la implementación de typeof, el operador devuelve "object" para null. Este comportamiento se ha mantenido para no romper la compatibilidad con versiones antiguas de JavaScript.7


//¿Qué resultado obtendremos al ejecutar el siguiente código?
if (true && "0") {
    console.log("Verdadero");
    }
    else {
    console.log("Falso");
    }
//verdadero ->La condición dentro del if es true && "0".
// En JavaScript, el operador lógico && evalúa sus operandos y devuelve el segundo operando si ambos son "truthy".
// Evaluación de la condición: true: Es un valor "truthy".
// "0": En JavaScript, una cadenano vacía  (aunque sea "0") también es "truthy".

//El primer operando es 6, que es "truthy".El segundo operando es 8, que también es "truthy".
//RPTA: 8 >= Como ambos valores son "truthy", el operador && devuelve el último operando evaluado, que es 8.
dato = 6 && 8
console.log(dato);

//¿Cómo se puede evitar la propagación de un evento en JavaScript?
//RPTA: evento.stopPropagation()

//¿Cuál sería la salida si ejecutara un console.log(resultado) con el siguiente código?
const cifras = [1,12,3,4,25,9,18,20]
resultados = cifras.filter(num=>num<10)
console.log(resultados)
//RPTA:   [1,3,4,9]

//En esta comparación 0 === 0.00 ¿cual seria el resultado?
//ROPTA: True;



