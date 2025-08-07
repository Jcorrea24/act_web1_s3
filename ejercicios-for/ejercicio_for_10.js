// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.

function esPalindromo(texto) {
    // Normalizar: quitar espacios, signos y convertir a minúsculas
    let limpio = "";
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i].toLowerCase();
        if (caracter.match(/[a-z0-9]/)) {
            limpio += caracter;
        }
    }

    // Verificar si es palíndromo
    let esValido = true;
    for (let i = 0; i < limpio.length / 2; i++) {
        if (limpio[i] !== limpio[limpio.length - 1 - i]) {
            esValido = false;
            break;
        }
    }

    console.log(`🔍 Verificando: "${texto}"`);
    console.log(esValido ? "✅ Es un palíndromo." : "❌ No es un palíndromo.");
    return esValido;
}

// Ejemplos de uso
esPalindromo("Oso"); // Palíndromo
