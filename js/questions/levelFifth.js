//Un objeto Javascript es?
//RPTA: Un conjunto encapsulado de propiedades y funciones


//Cuando en javascript se habla de métodos nos referimos a
//RPTA: Un nombre de acción que puede ejecutar un objeto

//Heredar un método o una propiedad significa que
//RPTA: Un objeto creado a partir de otro comparte sus metodos o propiedades

//Si defino el objeto Compra, como instancio un objeto gasto para comprar 4 kilos de peras a 3€ el kilo
Compra = function(n,k,p){
    this.nombre = n;
    this.kilos = k
    this.precio = p
   this.total = function(){
    return this.precio*this.kilos
   }
}

Gasto = new Compra('peras', 4, 3)

console.log(Gasto);
//Imprimimos el total
console.log(`total: ${Gasto.total()}` );

//El prototipo es una mecanismo usado en Javascript para?
//  Implementar la herencia de atributos o métodos en el sistema de objetos.


//Si tengo el objeto
cuadrado = {lado: 4, area: function(){return this.lado+this.lado}}
//¿Que es this?
//RPTA: Es el propio objeto cuadrado

//Si tengo un objeto llamado cuadrado con un método denominado area, el código para invocar este método es ...
//RPTA: Cuadrado.area();

//Para crear un objeto es imprescindible el uso de funciones
//RPTA: No. Se puede crear con una expresión, la estructura Class o a partir de otro objeto.

//¿Como instancia Javascript los objetos?
//  Javascript no instancia objetos porque no existen las clases

//¿Qué son las clases en Javascript?
//  Es una construcción para simular el funcionamiento de las clases de la POO

