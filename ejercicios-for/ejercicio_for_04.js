// Ejercicio For 4: Generador de Números Primos
// Utiliza ciclos for anidados para encontrar y mostrar todos los números primos entre 1 y 100. 
// Debe indicar cuántos números primos se encontraron.

for (let num = 1; num <= 100; num++) {
    let esPrimo = true; 
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
        if (num % divisor === 0) {
            esPrimo = false; 
            break; 
        }   
    }
    if (esPrimo) {
        console.log(num); 
    }   
}
console.log("Se encontraron todos los números primos entre 1 y 100.");  
