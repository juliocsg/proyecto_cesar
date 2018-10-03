const axios = require('axios');

let encodedUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyD4hXcsqRyXhzy8qs1PYnzTPRhbc8mIY90`)
    .then((resp) => {
        //pista 
        let location = resp.data.results;
        let coors = location.geometry.location;
        console.log('Dirección: ', location.formatted_address);
        console.log('lat: ', coors.lat);
        console.log('lng: ', coors.lng);

        //console.log(JSON.stringify(resp.data, undefined, 2)); //si se va a usar en undefined y el espaciado 
        //console.log(resp.status);
    })
    .catch((err) => {
        console.log('ERROR!!!!', err);
    });