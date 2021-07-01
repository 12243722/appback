const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10, // 最大连接数
    host: 'localhost',
    user: 'root',
    password: '59c038c5621f88a5',
    database: 'user'
});

module.exports = pool;