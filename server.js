var express = require('express');
var path = require("path");
var app = express();
var PORT = process.env.PORT || 5000;

app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "public/index.html"));
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});