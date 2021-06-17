var dato1 = 24; /*Se declaran las variables*/
var dato2 = "Holaaaaa";
var dato3 = "false";
var dato4 = "5.377373473738329494854958585738383838383847583483"; /* Para número muy largo como 5.3781298309484843 se hace lo de la línea 19*/
var dato5 = true;
var dato6 = null;
var dato7 = "Hoy es un lindo día";
var dato8 = 829;
var dato9 = "null";
var dato10 = false;

 /*Se imprimen en consola para que nos muestre el tipo de dato "typeof" */
console.log('dato1', typeof(dato1)); 
console.log('dato2', typeof(dato2));
console.log('dato3', typeof(dato3));
/*console.log('dato4', typeof(parseInt(dato4)), parseFloat(dato4)); /* parseFloat para /*parseFloat para numero decimal y parseInt para enteros*/
console.log(typeof(dato4), 'ParseFloat Decimales:', parseFloat(dato4).toPrecision(30));*/
console.log('dato5', typeof(dato5));
console.log('dato6', typeof(dato6));
console.log('dato7', typeof(dato7));
console.log('dato8', typeof(dato8));
console.log('dato9', typeof(dato9));
console.log('dato10',typeof(dato10));
console.log(typeof(dato11)); /*En consola aparece como "undefined", pues es una variable que no existe*/

/*console.log(typeof(dato1)); Así lo escribimos al inicio y luego de la siguiente manera
console.log('dato1', typeof(dato)); Así lo escribimos para que identifiquemos los datos */

/*Para imprimir varias cosas en consola se usan las comas, ejemplo linea 15. */
/*Parseo se puede usar para operaciones:
var suma = dato4 + dato8; */
var suma = parseInt(dato4) + dato8;
console.log('suma: ', suma);



