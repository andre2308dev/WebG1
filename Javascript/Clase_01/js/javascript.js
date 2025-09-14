console.log("Hola Mundo Consola");
// alert("Hola Mundo Alerta");

let num1 = 30;
let num2 = 30;

let suma = num1 + num2;


console.log("El " + num1 + " es un tipo: " + typeof num1);

console.log(`El ${num1} es un tipo: ${typeof num1}`);

if(num1 > num2) {
    console.log("Num1 es mayor a Num2");
} else {
    console.log("Num2 es mayor o igual a Num1");
}

const arreglo = [12121,12121,"qwdqwd", true];

console.log(arreglo);
arreglo.push("nuevo elemento");
console.log(arreglo);