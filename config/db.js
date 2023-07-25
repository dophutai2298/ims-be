const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
const connection = mysql.createConnection({
  port: 3306,
  host: "bavtrtdfiype2lknyeug-mysql.services.clever-cloud.com",
  user: "uflu92a6qgqpypl1",
  password: "fcBcmi9Xbq76Bm6VMtTI",
  database: "bavtrtdfiype2lknyeug",
  timezone: "UTC",
});

connection.connect((err) => {
  if (!err) {
    console.log("database connection successful");
  } else {
    console.log("Database connection failed");
  }
});
module.exports = connection;
