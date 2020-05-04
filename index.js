const axios = require('axios');
const   peticiones = require('./peticionesMiguel')

const respuesta = peticiones.PetecionesMiguel(axios);
respuesta.then(res => console.log(res.data));

