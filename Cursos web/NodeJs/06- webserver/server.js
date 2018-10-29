const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
//Express HBS engine
//directorio para almacenar
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Julio',
        anio: new Date().getFullYear()
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        telefono: '0961383306',
        anio: new Date().getFullYear()
    })
})

/*app.get('/data', (req, res) => {
    res.send('Hola Data');
})*/

app.listen(3000, () => {
    console.log("Escuchando peticiones en el puerto 3000");
});