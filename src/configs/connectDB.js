// get the client
import mysql from "mysql2";
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "nodejs_basic",
});

// simple query
connection.query("SELECT * FROM `users`", function (err, results, fields) {
  console.log("Check mysql2 >>>>>>>>>>");
  console.log(results); // results contains rows returned by server
  console.log(results[0]);
});

export default connection;
