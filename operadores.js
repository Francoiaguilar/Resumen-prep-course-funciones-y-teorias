//operadores

console.log(3+ 5) ;
console.log(8-9) ;
console.log( 8 * 2);
console.log(10/2);

// resto o modulo de una divicion = (%)

console.log(95%4)

// suma/adicion de strings
console.log( "hola " + "franco")

//Además dentro de una variable (var ____ =) se puede hacer la suma de un string + otra variable guardada anteriormente. 

var nombre = "franco"
var buenaenergia = "buena suerte " + nombre
var malaenergia = "no me hables " + nombre

console.log(buenaenergia)
console.log(malaenergia)

// lógicos/relacionales : Los resultados de los operadores lógicos/relacionales siempre serán del tipo de dato “ booleano”

console.log( 3< 10)
console.log ( 3>10)
console.log ( 5 === 7)
console.log ( 20 == 10)
console.log( 40!=40);
console.log(19 >= 19);
console.log(15<=1);

// asociatividad : (se resuelve segun el orden de su precedencia) asignacion y asocicatividad


var a = 1
var b = 2
var c = (a = b) //operador de asignacion

console.log(a);
console.log(b);
console.log(c); //el resultado es 2 ya que la tabla indica que la precedencia para resolver es de derecha a izquierda.

console.log(16/ 2 / 4); // operador de divicion ( asociacion con precedencia de izquieda a derecha por eso el resultado es 2)
