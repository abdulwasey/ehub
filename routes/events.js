var express = require("express");
var router  = express.Router();

router.get("/business_motivation", function(req, res){
    res.render("./events/business_motivation");
});

router.get("/startup_summit", function(req, res){
    res.render("./events/startup_summit");
});

router.get("/startup_festival", function(req, res){
    res.render("./events/startup_festival");
});

router.get("/monthly_events", function(req, res){
    res.render("./events/monthly_events");
});

module.exports = router;