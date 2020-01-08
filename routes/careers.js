var express = require("express");
var router  = express.Router();

router.get("/jobs", function(req, res){
    res.render("./careers/jobs");
});

router.get("/internships", function(req, res){
    res.render("./careers/internships");
});

router.get("/projects", function(req, res){
    res.render("./careers/projects");
});

module.exports = router;