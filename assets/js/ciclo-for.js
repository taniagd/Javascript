/* Son estructuras de control que se repiten*/
const meses = ['Enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
console.log (meses[0]);
console.log (meses[1]);
console.log (meses[2]);

//  Ciclo for:
for (let i=0; i < 12; i++){
    console.log(meses[i]);
}

const multiplicar = (numero) => {//Función de flecha
    for(let i=1; i<=10; i++) {
        document.write (`<h1>${numero} x ${i} = ${numero * i}</h1>`);
    }
} 
/*Uso de backstick (acento grave) para hacer más fácil la impresión sin usar comillas y en lugar de usar el "+"*/
multiplicar(8);