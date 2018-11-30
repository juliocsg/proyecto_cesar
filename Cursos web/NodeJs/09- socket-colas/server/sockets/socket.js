const { io } = require('../server');
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin cesar',
        mensaje: 'Bienvenido a esta aplicación hecho por mi'
    });
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    //Desde el index.html se envió el mensaje con el método del socket emit y en el servidor escucha el mensaje con on
    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        /* data == {
            usuario: data.usuario,
            mensaje: data.mensaje
        }*/
        //envia a todo el mundo
        client.broadcast.emit('enviarMensaje', data);


        /*if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL!!!!!'
            });
        }*/

    });
});