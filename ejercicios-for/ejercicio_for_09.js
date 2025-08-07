// Ejercicio For 9: Simulador de Dados
// Crea un simulador que use un ciclo for para lanzar dos dados 1000 veces. 
// Calcula y muestra la frecuencia de cada suma posible (2-12) y determina cuál es la más común.

function simuladorDeDados(lanzamientos) {
    let frecuencias = {};

    // Inicializar frecuencias para las sumas posibles (2 al 12)
    for (let suma = 2; suma <= 12; suma++) {
        frecuencias[suma] = 0;
    }

    // Simular lanzamientos
    for (let i = 0; i < lanzamientos; i++) {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        let suma = dado1 + dado2;
        frecuencias[suma]++;
    }

    // Mostrar resultados
    console.log(`🎲 Resultados de ${lanzamientos} lanzamientos de dos dados:`);
    for (let suma = 2; suma <= 12; suma++) {
        console.log(`Suma ${suma}: ${frecuencias[suma]} veces`);
    }

    // Determinar la suma más común
    let sumaMasComun = 2;
    for (let suma = 3; suma <= 12; suma++) {
        if (frecuencias[suma] > frecuencias[sumaMasComun]) {
            sumaMasComun = suma;
        }
    }

    console.log(`\n🔝 La suma más común fue ${sumaMasComun} con ${frecuencias[sumaMasComun]} apariciones.`);
    return frecuencias;
}

// Ejemplo de uso
simuladorDeDados(1000);