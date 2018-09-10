let nombre = 'Deadpool';
let real = 'Wade Winston';
//console.log(nombre + ' ' + real);
//onsole.log(`${nombre} ${real}`);

//let nombreCompleto = nombre + ' ' + real;
//let nombreTemplate = `${ nombre } ${ real }`;
//console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${ nombre } ${ real }`;
}
console.log(`${getNombre()}`);