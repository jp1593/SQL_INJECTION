require("dotenv").config();
const mysql = require("mysql2/promise");

const config = {
  host: "mysql-2f7acbf4-sqlinjection-3486.h.aivencloud.com",
  user: "avnadmin",
  password: process.env.PASS,
  database: "defaultdb",
  port: "18312",
};

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection(config);
    console.log("Connected to Aiven MySQL database");

    await connection.end();
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

connectToDatabase();
