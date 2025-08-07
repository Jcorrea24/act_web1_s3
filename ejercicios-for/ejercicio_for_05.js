
// Ejercicio For 5: Invertir Cadenas de Texto
// Crea un programa que use un ciclo for para invertir una cadena de texto carácter por carácter. 
// Muestra tanto la cadena original como la invertida.

for (let i = 0; i < 1; i++) {
    let cadena = ("Avion:");
    let cadenaInvertida = "";

    // Recorre la cadena desde el final hacia el inicio
    for (let j = cadena.length - 1; j >= 0; j--) {
        cadenaInvertida += cadena[j];
    }

    console.log("Cadena original:", cadena);
    console.log("Cadena invertida:", cadenaInvertida);
}