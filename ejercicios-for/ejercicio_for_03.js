// Ejercicio For 3: Análisis de Array de Números
// Dado un array de 20 números aleatorios, usa un ciclo for para encontrar: 
// el número mayor, el menor, la suma total, el promedio, y cuántos números son pares e impares.


function generarNumerosAleatorios(cantidad, min = 1, max = 100) {
    const numeros = [];
    for (let i = 0; i < cantidad; i++) {
        numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numeros;
}

let numeros = generarNumerosAleatorios(20);
let mayor = numeros[0];
let menor = numeros[0];
let sumaTotal = 0;
let cantidadPares = 0;
let cantidadImpares = 0;

for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    sumaTotal += num;
    if (num > mayor) mayor = num;
    if (num < menor) menor = num;
    if (num % 2 === 0) {
        cantidadPares++;
    } else {
        cantidadImpares++;
    }
}

let promedio = sumaTotal / numeros.length;

console.log("Array:", numeros);
console.log("Mayor:", mayor);
console.log("Menor:", menor);
console.log("Suma total:", sumaTotal);
console.log("Promedio:", promedio);
console.log("Cantidad de pares:", cantidadPares);
console.log("Cantidad de impares:", cantidadImpares);