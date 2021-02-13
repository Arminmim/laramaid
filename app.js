const express = require("express");

const app = express();
app.use( express.static( "public" ) );
app.set("view engine", "ejs");

app.get('/', function(req,res){

  res.render("index");
});


var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});
