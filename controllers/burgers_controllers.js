var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res){
    burger:all(function(req, res){
        var hbsObject = {burgers:data};
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});




module.exports = router;