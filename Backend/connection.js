require("dotenv").config();

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "mysql-2f7acbf4-sqlinjection-3486.h.aivencloud.com",
  user: "avnadmin",
  password: process.env.PASS,
  database: "defaultdb",
  port: 18312,
});

//Check connection
connection.connect(function (error) {
  if (error) throw error;
  console.log("Connection succesfull");
});

module.exports = connection;
