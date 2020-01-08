var express = require("express"),
    app = express();

var indexRoutes  = require("./routes/index");
var ehubRoutes = require("./routes/ehub");
var startupRoutes = require("./routes/startup");
var eventsRoutes = require("./routes/events");
var careersRoutes = require("./routes/careers");

app.use("/",indexRoutes);
app.use("/ehub",ehubRoutes);
app.use("/startup",startupRoutes);
app.use("/events",eventsRoutes);
app.use("/careers",careersRoutes);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("*" ,function(req,res){
	res.render("./home/404");
});
app.listen((process.env.PORT||3000),function(){
    console.log("The server has started");
});