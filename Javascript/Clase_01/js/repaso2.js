// console.log("Hola Mundo Consola");
// // alert("Hola Mundo Alerta");

// let num1 = 30;
// let num2 = 30;

// let suma = num1 + num2;


// console.log("El " + num1 + " es un tipo: " + typeof num1);

// console.log(`El ${num1} es un tipo: ${typeof num1}`);

// if(num1 > num2) {
//     console.log("Num1 es mayor a Num2");
// } else {
//     console.log("Num2 es mayor o igual a Num1");
// }

// const arreglo = [12121,12121,"qwdqwd", true];

// console.log(arreglo);
// arreglo.push("nuevo elemento");
// console.log(arreglo);

// let nu1 = 30;
// let nu2 = 20;

// // Funciones

// function saludar(nombre) {
//     console.log(`Hola ${nombre}`);
// }
// function sumar(a,b) {
//     return a + b;
// }

// // JASON

// const persona = {
//     nombre: "Juan",
//     apellido: "Perez",
//     perros: ["Firulais", "Pichicho"],
//     edad: 30,
//     casado: false,
//     autos: { 
//         marca: toyota,
//         modelo: "Corolla",
//         placa: 1212
//      },
//     saludar: function() {
//         console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
//     }
// }

const arregloPersonas = [
    {nombre: "juan", edad: 30},
    {nombre: "Dario", edad: 35},
    {nombre: "Carmen", edad: 27},
    {nombre: "David", edad: 40},
]

console.log(arregloPersonas.forEach((persona) => {
    console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años`);
}       ));

console.log(arregloPersonas.map((persona) => {
    return `Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años`;
}       ));
