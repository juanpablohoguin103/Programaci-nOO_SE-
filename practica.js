let nombre = "juan";
let apellido =  "holguin" ;
let edad =23;

console.log(` hola mi nombre es : ${nombre} ${apellido} y tengo ${edad} `)

ejerccio 

var a= 0;
var b= 0;
var calcularMultiplicacion=0;
a =parseInt(prompt('Digita un numero (a)'));
a =parseInt(prompt('Digita un numero (b)'));
calcularMultiplicacion = multiplicacion (a,b);

function multiplicacion(nA , nB) {
const resultado = nA * nB;
console.log('El resultado de la multiplicacion es el siguiente:'+ resultado)
}