var orm = require("../config/orm.js")

var burger = {
    all: function(cb){
        orm.all("burgers", function(r){
        cb(r)
        })
    },
    create: function(column, value, cb){
        orm.create("burgers", column, value, function(result){
            cb(result)
        })
    }

}

module.exports = burger