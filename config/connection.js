//node modules
const mysql = require('mysql');
require('dotenv').config()

//connection to mysql with env file
const connection = mysql.createConnection({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE  
});

module.exports = connection;