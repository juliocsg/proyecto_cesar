const fs = require('fs-extra');
//cp.copy.writeFileSync();
class TicketControl {
    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();
        let data = require('../datos/datos.json');

        if (data.hoy === this.hoy) {
            this.ultimo = data.ultimo;
        } else {
            this.reiniciarConteo();
        }
    }
    siguiente(){
      this.ultimo+=1;
      this.grabarArchivo();
      return `Ticket ${this.ultimo}`;
    }
    reiniciarConteo() {
      this.ultimo = 0;
      console.log('Se ha inicializado el sistema');
      this.grabarArchivo();
    }
    grabarArchivo(){
         //inciciales
         let jsonDataInicial = { "ultimo": 10, "hoy": 0 };
         let jsonData = {
             ultimo: this.ultimo,
             hoy: this.hoy
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
