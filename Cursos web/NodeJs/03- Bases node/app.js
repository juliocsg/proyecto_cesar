const { crearArchivo } = require('./multiplicar/multiplicar');


let base = '5';

console.log(process.argv);

crearArchivo(base)
    .then((archivo) => {
        console.log(`Archivo creado: ${archivo}`)
    })
    .catch(e => console.log(e));