const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Điền password DB của mày
    database: 'topcv_clone',
    waitForConnections: true,
    connectionLimit: 10,
});

module.exports = pool;