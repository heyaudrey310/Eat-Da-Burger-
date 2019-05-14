var connection = require("./connection.js");

//code borrowed from Activity 17-CatsApp


///////////////////functions/////////////////////
// Helper function for SQL syntax.
// helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


// Object for all our SQL statement functions.
var orm = {
  //selectAll()
  selectAll: function (tableInput, cb) {

    connection.query("SELECT * FROM burgers", function (err, result) {
      if (err)
        throw err;
      return result;


    });
  },


  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) 
        throw err;
        return result;
      

      
    });
  },
  //updateOne()
  // An example of objColVals would be {burger_name: delicious, devoured: true}
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) 
        throw err;
        return result;
      

    
    });
  }
};

// Export the orm object for the model (burgers.js).
module.exports = orm;