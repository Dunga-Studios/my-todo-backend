const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "my_todo",
    port: 3306
});

con.connect(function(err) {
         if (err) throw err;
         console.log("Connected mysql on port 3306");
});


module.exports = con;
