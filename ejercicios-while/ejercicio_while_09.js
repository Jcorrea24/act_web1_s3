// Ejercicio While 9: Juego de Adivinanza Mejorado
// Crea un juego donde el usuario debe adivinar un número entre 1 y 100. 
// Usa while para dar pistas (mayor/menor) y limita a 7 intentos.}}


const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intentos = 0;

function adivinar() {
    if (intentos >= 7) {
        console.log("😢 ¡Se acabaron los intentos! El número era " + numeroSecreto);
        rl.close();
        return;
    }

    rl.question("Adivina el número (entre 1 y 50): ", function(respuesta) {
        let numero = parseInt(respuesta);
        intentos++;

        if (numero === numeroSecreto) {
            console.log("🎉 ¡Adivinaste el número!");
            rl.close();
        } else if (Math.abs(numero - numeroSecreto) <= 3) {
            console.log("🔥 ¡Estás muy cerca!");
            adivinar();
        } else if (numero < numeroSecreto) {
            console.log("📉 Muy bajo.");
            adivinar();
        } else {
            console.log("📈 Muy alto.");
            adivinar();
        }
    });
}

adivinar();
