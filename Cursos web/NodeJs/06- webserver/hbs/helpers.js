// helpers
const hbs = require('hbs');
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        //slice hace que recorra desde la siguiente variable
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});