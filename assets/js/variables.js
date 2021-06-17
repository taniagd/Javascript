/* alert('Variables'); Para verificar que esté cargado el script */

/* var variable1 = 'Soy la variable 1';
let variable2 = 'Soy la variable 2'; */
/*Se ha usado la palabra reservada "var" para declarar variables, pero se recomienda usar "let" (palabra reservada) y la diferencia es que es que "var" es global,
pero let es para scopes (lo que está entro de  unas llaves, por ejemplo.
Usar let ayuda a la memoria del programa, pues al ser usada se 'destruye', mientras que para var se 'guarda' esa memoria
Se recomienda usar let de ahora en adelante*/

/*const variable_constante = '123123123'
Para crear constantes, su valor no se puede cambiar, sino arrojaría un error */

var variable1 = 'Soy la variable 1';
console.log (variable1);
variable1 = 1212;
console.log(variable1);

const variable2 = "Variable 2";
console.log (variable2);
/*variable2 = 10;
console.log(variable2);*/

/* en variable se pueden cambiar los valores, pero no en la constante por eso sale un error en consola*/
let nueva_variable = 'Mi nueva variable';
console.log (nueva_variable);
// Para declarar variables puedo colocar guion al principio, símbolo dóla. No se puede que la variable se inicie con números, pero se puede poner al final. 

/*Declaramos función:
function varTest() {
    var x = 31; //El resultado en consola fue 71. Ver línea 27.
    if (true) {  // Se realiza evaluación de la condición para ejecutarse o pasar a la siguiente parte del código
        var x = 71; //El resultado en consola fue 71, porque Javascript tomará el último valor que se le dé a "var", pues es global.
        console.log(x);
    }
    console.log(x);
}
//No pasa nada en página, entonces para ejecutarla debemos llamar a la variable así:
varTest();
*/

function letTest(){
    let x = 31; // El resultado en consola fue 31 porque pertenece a cierto scope (fragmento de código delimitado por llaves)
    if (true){
        let x = 71; //El resultado en consola fue de 71 porque pertenece a cierto scope.
        console.log(x);
    }
    console.log(x); //Hasta aquí el let entra, crea y destruye.
    return x; //Para recuperar ese valor usaríamos esto. Return se pone al final de código que quieres recuperar.
}

letTest(); //Llamamos a la variable.

//Funciones de flecha: Son una nueva y diferente manera de escribir las funciones.
//Se declara como constante, el nombre de la función, abrimos paréntesis y ponemos igualmayorque:
const nuevFuncion = () => {
    var x = 31;
    if (true) {
        var x = 71;
        console.log (x);
    }
    console.log(x);
}

nuevaFuncion(); //llamamos a la función.
//Esta forma es equivalente a la forma tradicional de declarar funciones, pero ahora con estas funciones de flecha se reserva esta memoria 

//Template string
const nombre = "Tania Belen";
const apellidos = "Gayosso Domínguez";

console.log ('¡Hola! Mi nombre es' + nombre + 'mis apellidos son' + apellidos);

//En Template string se hace así: 
console.log(`¡Hola! Mi nombre es ${nombre} y mis apelidos son ${apellidos}`); // NO son comillas, es un acento grave ` (alt+96).

//Operador Spread
const arreglo = [1,2,3,4,5];
console.log(arreglo);