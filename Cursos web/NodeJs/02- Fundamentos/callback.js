/*setTimeout(() => {
    console.log('Hola Mundo');
}, 3000);*/

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Fernando',
        id
    }
    if (id === 20) {
        callback(`El usuario con un id ${ id }, no existe en la BD`);
    } else {
        callback(null, usuario);
    }

}
getUsuarioById(1, (err, usuario) => {

    if (err) {
        console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});