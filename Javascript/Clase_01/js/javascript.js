// ================= SALIDAS =================
// alert("Hola mundo");
console.log("Hola mundo DESDE LA CONSOLA");

// ================= ENTRADA =================
//let i= prompt("Ingrese su nombre");
//console.log(i);

// ================= VARIABLES =================
let nombre = "Wilmer Arley"; // String
let edad = 20; // Number
let isStudent = true; // Boolean

console.log(nombre);
console.log(edad);
console.log(isStudent);

// ================= TIPOS DE DATOS =================
let apellido = "Patino"; // String
let altura = 1.75; // Number (Decimal)
let isMarried = false; // Boolean
let dato = 5;
let dato2 = "5";

console.log(typeof apellido);
console.log(typeof altura);
console.log(typeof isMarried);
console.log(dato == dato2); // == compara solo el valor
console.log(dato === dato2); // === compara valor y tipo
console.log(dato === Number(dato2)); // === compara valor y tipo usando Casting

// ================= OPERADORES ARITMÉTICOS =================
let a = 9;
let b = 5;

console.log("Suma: " + (a + b));
console.log("Resta: " + (a - b));
console.log("Multiplicación: " + (a * b));
console.log("División: " + (a / b));
console.log("Módulo: " + (a % b));

if (dato > dato2) {
    console.log("dato es mayor que dato2");
    // }a else {
    console.log("dato no es mayor que dato2");
}

const x = [];
const y = [1, 2, 3];
console.log(y);
const arreglo = [4, "kjchsdk", true, [3, 4, 5], { id: 123, nombre: "Wilmer" }];
console.log(arreglo);
arreglo.splice(1, 2);
console.log(arreglo);

// ================= FUNCTIONS =================

function suma(a, b) {
    return a + b;
}
console.log(suma(4, 5));

// ================= ANONYMOUS FUNCTIONS =================

const variableFuncion = function (a, b) {
    return a + b;
}

console.log("Anonima--> " + variableFuncion(4, 5));

// ================= ARROW FUNCTION =================

const arrowA = () => { };
const arrowB = a => { return a + 1 };
const arrowC = (a, b) => { return a + b };
const arrowD = (a, b) => a + b;
const arrowE = (a, b) => { 
    a++; 
    b++; 
    return a + b; 
};

const personaA= {
    nombre:"Wilmer",
    sexo: true,
    notas:{}
}

const personaB= {
    "nombre":"Wilmer",
    "sexo": true,
    "notas":{}
}

// ================= FIUNCIONES DE ORDEN SUPERIOR =================
// RETORNA O RECIBE COMO PARÁMETRO OTRA FUNCIÓN

const arreglo2 = [
    {nombre: "juan", edad: 23},
    {nombre: "pedro", edad: 12},
    {nombre: "carlos", edad: 19},
    {nombre: "jose", edad: 15},
];

const filtrados=arreglo2.filter((i)=>{return i.edad>=18});
const sumatoria=arreglo2.reduce((ini,i)=> {return i.edad+ini}, 0);
const encontrado= arreglo2.find(i=>i.nombre=="juan")
console.log(filtrados);
console.log(sumatoria);
console.log(encontrado);
