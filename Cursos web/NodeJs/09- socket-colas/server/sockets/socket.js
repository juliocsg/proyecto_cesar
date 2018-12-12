const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');
let ticketControl = new TicketControl();
io.on('connection', (client) => {
    client.on('siguienteTicket', (data, callback)=> {
        let siguiente = ticketControl.siguiente();
        console.log(siguiente);
        //llama la funcion utilizado desde el front end
        callback(siguiente);
    });
    client.emit('estadoActual', {
        actual:ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()
    });
    //emitir un evento 'estadoActual'
    //{
    //actual: ticketControl.getUltimoTicket()
    //}
    //
    client.on('atendTicket', (data, callback) =>{
        if (!data.escritorio){
            return callback({
                err:true,
                mensaje: 'El escritorio es necesario'
            });
        }
        let atenderTicket2 = ticketControl.atenderTicket(data.escritorio);
        callback(atenderTicket2);
        //actualizar / notificar cambios en los ULTIMOS 4
        //emitir ultimos 4 broadcast
        client.broadcast.emit('ultimos4',{
            ultimos4: ticketControl.getUltimos4()
        });
    });
});