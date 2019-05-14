var mysql = require("mysql");

var connection;


if(process.env.burgersDB_URL)
{
    connection = mysql.createConnection(process.env.burgersDB_URL);

}
else
{
  connection = mysql.createConnection({
  port: 8080,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgersDB"
});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;