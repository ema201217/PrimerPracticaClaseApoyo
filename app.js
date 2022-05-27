const process = require("process")

const nombre = process.argv[2]

process.argv[2] === undefined ? console.log("ingrese su nombre por favor"):
console.log(`Hola ${nombre}, ¿qué tal va todo?`)