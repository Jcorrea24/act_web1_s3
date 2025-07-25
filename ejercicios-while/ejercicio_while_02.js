// Utiliza un ciclo while para calcular la suma de todos los números pares entre 1 y 50.
//  Muestra el resultado final y cuántos números pares se sumaron.
   
/*let contador = 1;
let sumapares = 0;
let contadorPares = 0;

while (contador <= 50) {
  if (contador % 2 === 0) {*/
    

let numero = 1;
let suma = 0;
let cantidad = 0;

while (numero <= 50) {
  if (numero % 2 === 0) {
    suma += numero;
    cantidad++;
  }
  numero++;
}

console.log("La suma de los números pares entre 1 y 50 es:", suma);
console.log("Cantidad de números pares sumados:", cantidad);
