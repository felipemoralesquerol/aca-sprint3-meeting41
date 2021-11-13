const mysql = require('mysql2/promise');

exports.getAllStudents = async function getAllStudents() {
    // Establece la conexión con la DB
    const con = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME
    });

    // Query/Consulta para traer TODOS los estudiantes
    const query = "SELECT * FROM Students";
    const [results,] = await con.execute(query, null);

    return results;
}
