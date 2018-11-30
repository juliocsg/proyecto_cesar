var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respueta server:', resp);
});
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});