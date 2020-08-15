var connection = require("../config/connection.js");

var orm = {
    all: function (input, cb) {
        let qString = "SELECT * FROM " + input + ";";
        connection.query(qString, (err, result) => {
            if (err) throw err
            cb(result);
        })
    },

    create: function (table, column, value, cb) {
        let string = column.toString()
        let qString = "INSERT INTO "+ table+ "(" + string + ")" + "VALUES (?)"
        console.log(qString)
        connection.query(qString, value, function (err, result) {
            if (err) throw err
            cb(result)
        })
    }





}



module.exports = orm;