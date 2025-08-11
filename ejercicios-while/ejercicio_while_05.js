// Ejercicio While 5: Calculadora de Factorial
// Implementa una función que use while para calcular el factorial de un número ingresado por el usuario.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número entero positivo para calcular su factorial: ", function(input) {
    let numero = parseInt(input);

    if (isNaN(numero) || numero < 0) {
        console.log("❌ Entrada inválida. Por favor ingrese un número entero positivo.");
    } else {
        let factorial = 1;
        let contador = numero;

        while (contador > 1) {
            factorial *= contador;
            contador--;
        }

        console.log("✅ El factorial de " + numero + " es: " + factorial);
    }

    rl.close();
});