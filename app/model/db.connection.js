const mysql = require('mysql');

const db = mysql.createPool ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'app_gereja'
});

exports.db = db;