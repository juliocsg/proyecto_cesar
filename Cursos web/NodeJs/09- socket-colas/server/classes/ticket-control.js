const fs = require('fs-extra');
class Ticket {
    constructor(numero, escritorio) {
        this.numero = numero;
        this.escritorio = escritorio;
    }
}
//cp.copy.writeFileSync();
class TicketControl {
    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();
        this.tickets = new Array();
        this.tickets = [];
        this.ultimos4 = [];
        let data = require('../datos/datos.json');
        if (data.hoy === this.hoy) {
            this.ultimo = data.ultimo;
            this.tickets = data.tickets;
            this.ultimos4 = data.ultimos4;
        } else {
            this.reiniciarConteo();
        }
    }
    siguiente(){
      this.tickets = [];
      this.ultimo += 1;
      let ticket = new Ticket(this.ultimo, null);
      this.tickets.push(ticket);
      
      this.grabarArchivo();
      return `Ticket ${this.ultimo}`;
    }
    getUltimoTicket(){
      return `Ticket ${this.ultimo}`;
    }
    atenderTicket(esccritorio){
        this.ultimos4 = [];
        if (this.tickets.length === 0){
            return 'No hay tickets';
        }
        let numeroTicket = this.tickets[0].numero;
        this.tickets.shift();
        let atenderTicket = new Ticket(numeroTicket, esccritorio);
        this.ultimos4.unshift(atenderTicket);
        if(this.ultimos4.length > 4){
            this.ultimos4.splice(-1,1); //borra el ultimo elemento
        }
        console.log('Ultimos 4');
        console.log(this.ultimos4);
        this.grabarArchivo();
        return atenderTicket;
    }
    reiniciarConteo() {
      this.ultimo = 0;
      this.tickets = [];
      this.ultimos4 = [];
      console.log('Se ha inicializado el sistema');
      this.grabarArchivo();
    }
    grabarArchivo(){
         //inciciales
         let jsonDataInicial = { "ultimo": 10, "hoy": 0 };
         let jsonData = {
             ultimo: this.ultimo,
             hoy: this.hoy,
             tickets: this.tickets,
             ultimos4: this.ultimos4
         };
         //const jsonDataString = JSON.stringify(jsonData);
         //let textoNormal = "hola mundo";
         fs.writeJSONSync('./server/datos/datos.json', jsonData, (err) => {
             if (err) {
                 console.error(err);
             }
         });
         //fs.writeFileSync('/server/datos/data.json', jsonDataString);
         console.log('Datos guardados');
    }
}
module.exports = {
    TicketControl
}
