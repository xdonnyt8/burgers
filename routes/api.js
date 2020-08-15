var express = require("express");

var router = express.Router();

var burger = require("../models/burger")

router.get("/", function(req, res) {
    burger.all(function (burgerData) {
        var hbsObj = {
            burgers: burgerData
        }
        console.log(hbsObj)
        res.render("index", hbsObj);
    })
})

router.post("/api/burgers", (req, res) => {
    burger.create([
        "name"
    ],
    [req.body.name],
    function(result){
         res.json({id: result.insertId});
    })

})

module.exports = router;