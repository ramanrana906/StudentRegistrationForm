var mysql = require('mysql');

 var con = mysql.createConnection({
    host:"sql12.freemysqlhosting.net",
    user:"sql12551489",
    password:"FfQbJ4UuFe",
    database:"sql12551489"
})

module.exports = con;