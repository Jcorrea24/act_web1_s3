// Ejercicio While 10: Procesador de Calificaciones
// Usa while para ingresar calificaciones de estudiantes (termina con -1). 
// Calcula el promedio, la nota más alta y más baja.}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let calificaciones = [];

function pedirCalificacion() {
    rl.question("Escribe una calificación (o -1 para terminar): ", function(input) {
        let nota = parseFloat(input);

        if (nota === -1) {
            if (calificaciones.length === 0) {
                console.log("No se ingresaron calificaciones.");
            } else {
                let suma = 0;
                let mayor = calificaciones[0];
                let menor = calificaciones[0];

                let i = 0;
                while (i < calificaciones.length) {
                    let actual = calificaciones[i];
                    suma += actual;
                    if (actual > mayor) mayor = actual;
                    if (actual < menor) menor = actual;
                    i++;
                }

                let promedio = suma / calificaciones.length;
                console.log(`📊 Promedio: ${promedio.toFixed(2)}`);
                console.log(`🏆 Mayor: ${mayor}`);
                console.log(`🐢 Menor: ${menor}`);
            }
            rl.close();
        } else {
            calificaciones.push(nota);
            pedirCalificacion();
        }
    });
}

pedirCalificacion();