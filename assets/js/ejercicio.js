/* Ejercicio ciclos 17 junio.
1. Programar que pida dos números (a través de prompt) y nos diga cuál es el mayor, el menor y si son iguales
2. Plus: Si los números no son un número o son menores o iguales a cero, que se vuelvan a pedir */

/*Procedimiento lógico
Si son iguales: Imprimir que son iguales
Sino si un número es mayor que otro núnmero: Imprimir que num1 es mayor que num2
sino: Imprimir que el num2 es mayor que numero 1 */

let number1 = parseInt(prompt('Escriba un número, por favor'));
let number2 = parseInt(prompt('Escriba otro número, por favor'));


if (number1 == number2) {
    document.write (`<h1> El ${number1} es igual al ${number2}</h1>`);
} else if (number1 > number2) {
    document.write (`<h1>El ${numbera1} es mayor que ${number2}</h1>`);
    document.write (`<h1>Inserte un número válido, por favor</h1>`);
} else {
    document.write (`<h1>El ${number1} es menor que ${number2} </h1>`);
}

/*Procedimiento lógico:
Si los números no son números:
Saber si num1 es número,}saber si num2 es número
Si los números son iguales a 0:
si num1 es menor o igual a 0, si num2 es igual o menor a 0*/

/*if (!isNaN (number1)) {
    document.write (`<h1> El dato ${number1} no es un número válido. Por favor, ingrese un número</h1>`);
} else if (!isNaN (number2)) {
        document.write (`<h1> El dato ${number2} no es un número válido. Por favor, ingrese un número</h1>`);
} else {
} 

if (number1 <=0) {
    document.write (`<h1> El dato ingresado ${number1} no es válido. Por favor,escriba un número </h1>`);
} else if (number2 <=0) {
    document.write (`<h1> El dato ingresado ${number2} no es válido. Por favor, escriba un número</h1>`);
 } else {

 } */
