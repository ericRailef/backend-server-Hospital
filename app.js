
// requires
var express = require('express');
var mongoose = require('mongoose');



// inicializar variables
var app = express();

//Conexion a la base de datos

mongoose.connection.openUri('mongodb://localhost:27017/HospitalDB', { useNewUrlParser: true, useUnifiedTopology: true }, (err, response) => {
    if (err) throw err;

    console.log('Base de datos: online')
})

// Rutas

app.get('/', (request, response, next) => {
    response.status(200).json({
        ok: true,
        mensaje: 'peticion realizada correctamente'
    });
});

// Escuchar petición 

app.listen(3000, () => {
    console.log('express server corriendo en el puerto 3000')
});