/* Ejercicio ciclos 17 junio.
1. Programar que pida dos números (a través de prompt) y nos diga cuál es el mayor, el menor y si son iguales
2. Plus: Si los números no son un número o son menores o iguales a cero, que se vuelvan a pedir */

let numero1 = parseInt(prompt('Escriba un número, por favor'));
let numero2 = parseInt (prompt('Escriba otro número, por favor'));


if (numero1 == numero2) {
    document.write (`<h1> El ${numero1} es igual al ${numero2}</h1>`);
} else if (numero1 > numero2) {
    document.write (`<h1>El ${numero1} es mayor que ${numero2}</h1>`);
}else if (typeof number <= 0) {
    document.write (`<h1>Inserte un número válido, por favor</h1>`);
} else {
    document.write (`<h1>El ${numero1} es menor que ${numero2} </h1>`);
}


/*
//Explicación de Carlos 
if (numero1 == numero2) {
    document.write (`El ${numero1} es igual al ${numero2}`);
} else if (numero1 > numero2) {
    document.write (`<h1> El ${numero1} es mayor que ${numero2}</h1>`);
} else {
    document.write(`<h1> El ${numero1} es menor que ${numero2}</h1>`);
} 
*/