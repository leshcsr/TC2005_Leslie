const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'hot_cakes',
    password: '',
    port: '3307'
});

module.exports = pool.promise();