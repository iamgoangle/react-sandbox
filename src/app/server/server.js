import express from "express"
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var productsController = require("./controllers/productsController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", productsController);

app.listen(7777, function () {
    console.log("Started listening on port", 7777);
});

// Connect to mongodb database
mongoose.connect("mongodb://localhost/golfdb");
