// Ejercicio While 8: Secuencia de Fibonacci
// Implementa un generador de la secuencia de Fibonacci usando while que muestre los primeros 20 números de la serie.

let a = 0;
let b = 1;
let contador = 0;

console.log("Los primeros 15 números de Fibonacci son:");

while (contador < 15) {
    console.log(a);
    let siguiente = a + b;
    a = b;
    b = siguiente;
    contador++;
}

