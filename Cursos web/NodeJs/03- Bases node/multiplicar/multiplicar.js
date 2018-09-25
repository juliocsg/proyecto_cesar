const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`==tabla de ${ base }===`.green);
    console.log('=================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let dato = '';
        if (!Number(base)) {
            reject(`
                    El valor introducido ${ base }
                    no es un número `);
            return;
        }
        //let tabla = 0;
        for (let i = 1; i <= limite; i++) {
            //let tabla = (i + 1) * 2;
            dato += `
                    ${ base } * ${ i } = ${ base * i }\n
                     `;
        }

        const data = new Uint8Array(Buffer.from(dato));
        fs.writeFile(`Tablas/tabla-${ base }-al-${ limite }.txt `, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`
                    tabla-${ base }-al-${ limite }.txt `);

            console.log(`
                    El archivo tabla - ${ base }.ext ha sido creado `);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}