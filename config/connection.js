var mysql = require("mysql");

require("dotenv").config()


let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB_NAME
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;