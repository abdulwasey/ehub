var express = require("express");
var router  = express.Router();

router.get("/", function(req, res){
    res.render("./home/landing");
});

router.get("/home", function(req, res){
    res.render("./home/home");
});

router.get("/contactus", function(req, res){
    res.render("./home/contactus");
});



module.exports = router;