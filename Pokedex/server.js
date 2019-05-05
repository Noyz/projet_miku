var express = require("express");
var data = require('./db/pokedex(1).json'); // your json file path
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/pokedex(1)", function(req, res, next) {
  res.send(data);
});

app.listen(5000, () => console.log('Example app listening on port 5000!'))