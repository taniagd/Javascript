let year = 2021; //Se declara variable.

/*Llamamos al ciclo y en los parentesis va la condicion, Mientras la condición sea verdadera se ejecutará, por ello es necesario que en algún punto la condición sea falsa*/

/*
while (year != 1990) { //El signo ! es operador lógico que significa distinto a.
    document.write(`<h1>${year}</h1>`);

    year--; //los -- le van quitando un año. Esto hará que el ciclo se detenga)
    year = year - 1;

    if(year == 2010) {
        break;
    }
}*/

/*
Operadores lógicos
mayor que: >
menor que: <
mayor o igual: >:
menor o igual: <=
Igual: ==
Distinto: !=
*/

/*Do while primero ejecuta el código y luego verifica que se cumpla la condición*/
while (year == 2020) {
    document.write(`<h1> Ciclo While ${year}</h1>`);
}
do {
    document.write(`<h1> Ciclo Do While ${year}</h1>`);
} while (year == 2020);

/*Si mi año es igual a 2020 que entre y ejecute, pero aquí no se cumplirá*/
