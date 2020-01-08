var express = require("express");
var router  = express.Router();

router.get("/director", function(req, res){
    res.render("./ehub/director");
});

router.get("/story", function(req, res){
    res.render("./ehub/story");
});

router.get("/working", function(req, res){
    res.render("./ehub/working");
});

module.exports = router;