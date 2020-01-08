var express = require("express");
var router  = express.Router();

router.get("/idea_stage", function(req, res){
    res.render("./startup/idea_stage");
});

router.get("/development_stage", function(req, res){
    res.render("./startup/development_stage");
});

router.get("/expansion_stage", function(req, res){
    res.render("./startup/expansion_stage");
});

module.exports = router;