// Set up MySQL connection.
var mysql = require("mysql");
var connection;
var password = require("password");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "wopdvdulibqk3v86",
    password: 'password',
    database: "a2qgjgcsntebav0x"
  });
};

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
