const fs = require('fs');

crearArchivo = (base) => {

    return new Promise((resolve, reject) => {
        let dato = '';
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }
        //let tabla = 0;
        for (let i = 1; i <= 10; i++) {
            //let tabla = (i + 1) * 2;
            dato += `${ base } * ${ i } = ${ base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(dato));
        fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);

            console.log(`El archivo tabla-${ base }.ext ha sido creado`);
        });
    });
}

module.exports = {
    crearArchivo
}