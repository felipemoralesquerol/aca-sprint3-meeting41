/* Ejercicio de prueba*/
require('dotenv').config();
const morgan = require('morgan');

const sql = require('./connectToMySQL');

const port = process.env.APP_PORT;
const morganFormat = process.env.APP_MORGAN_FORMAT;

const express = require('express')
const app = express()

app.use(morgan('dev'));

app.get('/', function (req, res) {
    const texto = 'Esta es información obtenidad desde tu API Meeting 41!!';
    console.log(texto)
    res.send(texto)
})

app.get('/version', function (req, res) {
    res.send('API v1.0 (con soporte de RDS by AWS')
})


app.get('/api/students', async (req, res) => {
    try {
        // Esperamos a que termine de devolver los estudiantes
        // antes de retornar una respuesta
        const students = await sql.getAllStudents();
        res.send(students);
    } catch (err) {
        console.error(`Error: `, err.message);
    }
})

app.listen(port, () => {
    console.log(`Aplicación escuchando en el puerto ${port}`);
})