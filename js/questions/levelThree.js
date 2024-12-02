//Si por ejemplo queremos saber si la variable ancho está comprendida entre los valores 12 y 20, cual de las siguientes instrucción sería la adecuada
// ancho = 17
// if(ancho >=12 && ancho <=20){
// alert("It's correctly")
// }

//Las expresiones regulares son un método ideal para buscar patrones de texto en una cadena. Señala cual de las siguientes cadenas o palabras no concordaría con el patrón dado por la expresión regular [0-9]+\D{4}
//RPTA:   435-AERT - [0-9]+: Esto significa "uno o más dígitos". Al menos un número debe aparecer al inicio del patrón.
// \D: Significa "cualquier carácter que no sea un dígito" (una letra, símbolo, etc.).
// \D{4}: Significa "exactamente 4 caracteres que no son dígitos".

//En el siguiente código averigua que aparecería en la ventana alert
// var vig1, vig2
// if (vig1 > vig2)
//     alert("Primera posibilidad")
// else
//     alert("Segunda posibilidad")


//Si en una función escrita en Javascript instrucción coloco la instrucción alert("valor " + "nulo") el resultado será
//A windows whit alert whith phrase valr nulo

//Cual sería el resultado que quedaría en la variable resultado tras la ejecución de este código
//  var resultado;
//  var cadena = new Array( )
//  resultado = typeOf(cadena)
 //RPTA: Array

 //Cuando un programa en Javascript encuentra la instrucción "12" <= 12 ¿que ocurriría?
 //Devuelve true - bacause=>Efectivamente, Javascript convierte la cadena "12" en el número 12 y luego realiza la comparación

 //La llamada a la función parseInt("2316", 16) devolverá...?
 //2341 convertido en decimal


 //Tras ejecutarse la instrucción resultado = 6 << 1 la variable resultado condentrá el valor?

//  resultado = 6 << 1 
//  console.log(resultado);
 //El resultado es 2 =><< es un desplazamiento binario a izquierda, o sea, multiplicar por 2.


 //Averiguar si un número es par o impar es bastante fácil, al menos cuando lo haces de cabeza. 
//Pero ¿Sabrías decir con cual de las siguientes códigos podría hacerse en Javascript?
numeros = 100

for (let num = 0; num < numeros; num++) {
   num % 2 ===0? console.log(num):console.log('Thisnotpar');  
}
 

//Sabrías predecir cual es el valor almacenada en la variable resultado al terminar de ejecutarse el siguiente código
var resultado=0;
var cadena = "minombre"
resultado = isNaN(cadena)
console.log(resultado);

//RPTA: true //Because NaN dice si una variable no es numerica