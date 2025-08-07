// Ejercicio For 8: Contador de Caracteres
// Desarrolla un programa que use un ciclo for para contar la frecuencia de cada carácter en una cadena de texto. 
// Muestra los resultados ordenados alfabéticamente.

function contarCaracteres(texto) {
    let frecuencia = {};

    // Contar frecuencia de cada carácter
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (frecuencia[caracter]) {
            frecuencia[caracter]++;
        } else {
            frecuencia[caracter] = 1;
        }
    }

    // Ordenar alfabéticamente las claves
    let caracteresOrdenados = Object.keys(frecuencia).sort();

    console.log(`🔍 Frecuencia de caracteres en: "${texto}"`);
    for (let caracter of caracteresOrdenados) {
        console.log(`"${caracter}": ${frecuencia[caracter]}`);
    }

    return frecuencia;
}

// Ejemplo de uso
contarCaracteres("murcielago"); // Contar caracteres en "murcielago"