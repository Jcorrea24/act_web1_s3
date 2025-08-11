// Ejercicio While 6: Búsqueda en Array
// Crea un programa que use while para buscar un elemento específico en un array de 15 números aleatorios. 
// Muestra en qué posición se encontró.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generar un array de 15 números aleatorios entre 1 y 100
let numeros = [];
while (numeros.length < 15) {
    let aleatorio = Math.floor(Math.random() * 100) + 1;
    numeros.push(aleatorio);
}

console.log("🔢 Array generado:", numeros);

rl.question("🔎 Ingresa el número que deseas buscar: ", function(input) {
    let numeroBuscado = parseInt(input);
    let posicion = 0;
    let encontrado = false;

    while (posicion < numeros.length) {
        if (numeros[posicion] === numeroBuscado) {
            console.log(`✅ El número ${numeroBuscado} se encontró en la posición ${posicion}`);
            encontrado = true;
            break;
        }
        posicion++;
    }

    if (!encontrado) {
        console.log(`❌ El número ${numeroBuscado} no se encuentra en el array.`);
    }

    rl.close();
});