var mysql = require('mysql');
var MySQLConnection = {};
var MySQLConPool = {};
// var USER = 'amaravathi9';
// var PWD = 'amaravathi9';
// var DATABASE = 'BNI';
// var DB_HOST_NAME = 'amaravathi9.ccnt4anxplco.ap-south-1.rds.amazonaws.com';
var USER = 'root';
var PWD = '';
var DATABASE = 'inventory_dashboard';
var DB_HOST_NAME = 'localhost';
var MAX_POOL_SIZE = 100;
var MIN_POOL_SIZE = 50;
var MySQLConPool = mysql.createPool({
    host: DB_HOST_NAME,
    port: 3306,
    user: USER,
    password: PWD,
    database: DATABASE,
    connectTimeout: 20000,
    connectionLimit: MAX_POOL_SIZE,
    debug: false,
    multipleStatements: true
});
exports.MySQLConPool = MySQLConPool;



