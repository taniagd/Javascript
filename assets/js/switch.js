const edad = 18;
let imprimir = '';
const texto = 'Hola';

//Si edad es igual a         dentro de paréntesis lo que se va a evaluar 
/*La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen. */
//Al trabajar con case debemos tener definido el valor, no usar mayorque, menorque.

switch (edad) { //Entre paréntesis ponemos los que se quiera hacer switch, por ejemplo edad (para números) o texto.
    case 18:
        imprimir = 'Caso 18';
        console.log(edad * 5);
    break;
    case 20:
         imprimir = 'Caso 20';
    break;
    case 'Hola':
        imprimir = '¡Hola mundo!'; //Para que esto se vea reflejado en web, cambiamos lo de paréntesis por "texto".
    break;
    default: 
        imprimir = 'Datos por defecto';
    break;
}

document.write (`<h1> ${imprimir}</h1>`);
/*document.write('<h1>' + imprimir + '</h1>'); */





