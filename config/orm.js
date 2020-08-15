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
    },

    update: function (table, bool, condition, cb){
        let string
        let qString = "UPDATE " + table + " SET " + objToSql(bool) +" where " + condition;
        connection.query(qString, function(err, result){
            if(err) throw err
            cb(result)
        })
    }
}

function objToSql(ob){

    var arr = [];
    console.log(ob)
    for(var key in ob){
        var value = ob[key]
        if (Object.hasOwnProperty.call(ob, key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key+"=" + value);
        }
    }
    return arr.toString();
}


module.exports = orm;