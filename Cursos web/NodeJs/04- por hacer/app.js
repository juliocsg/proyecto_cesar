const argv = require('yargs').argv;

console.log(argv);

//devuelve lo que va a escribir dentro del comando
let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear por hacer');
        break;
    case 'listar':
        console.log('Listar todas las tareas por hacer');
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;

    default:
        console.log('Comando no reconocido');
}