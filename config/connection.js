// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "sgedfjr6dmhwbopf",
    password: "bruapg0t5rtb5zdi",
    database: "worj7qbkxxhxf4jg"
  });

  // Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  // Export connection for our ORM to use.
module.exports = connection;
