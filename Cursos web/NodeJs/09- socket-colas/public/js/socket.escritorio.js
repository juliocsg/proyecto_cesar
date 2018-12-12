//Comando para establecer la conexión
var socket = io();
var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}
var escritorio = searchParams.get('escritorio');
var label = $('small');
console.log(escritorio);
//document.getElementsByTagName('h1').innerhtml = 'Escritorio ' + escritorio;
$('h1').text('Escritorio ' + escritorio);
//var btn = document.getElementsByTagName('button');
function socketButton() {
    socket.emit('atendTicket', {escritorio}, function(resp) {
        console.log(resp);
        if (resp==='No hay tickets') {
            label.text(resp);
            alert(resp);
            return;
        }
        label.text('Ticket ' + resp.numero)
       // $('small').text(resp.numero);
    });
    
}
/*$('button').on('click', function () {
    socket.emit('atendTicket', {escritorio}, function(resp) {
        console.log(resp);
    });
});*/
