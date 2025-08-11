// Ejercicio While 3: Validador de Contraseña
// Desarrolla un programa que use while para solicitar una contraseña hasta que cumpla con los criterios: 
// mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contrasenaCorrecta = "admin123";
let contadorIntentos = 0;

function solicitarContrasena() {
    rl.question("Ingrese la contraseña: ", function(contrasenaIngresada) {
        if (contrasenaIngresada === contrasenaCorrecta) {
            console.log(`✅ Acceso concedido. Intentos fallidos antes del acceso: ${contadorIntentos}`);
            rl.close();
        } else {
            contadorIntentos++;
            console.log("❌ Contraseña incorrecta. Intente nuevamente.");
            solicitarContrasena(); // Repetir el ciclo
        }
    });
}

solicitarContrasena();