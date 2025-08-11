// Ejercicio While 7: Contador de Dígitos
// Desarrolla un programa que use while para contar cuántos dígitos tiene un número entero ingresado por el usuario.

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Escribe un número positivo: ", function(numero) {
    let texto = numero.trim();
    let contador = 0;

    while (contador < texto.length) {
        contador++;
    }

    console.log(`Tu número tiene ${contador} dígitos.`);
    rl.close();
});