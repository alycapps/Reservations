var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  var data = {
    reservations: [],
    waitlist: []
  };
  
var visitorCount = 0;

app.get("/api/", function(req, res) {
    res.json(data);
  });

app.get("/api/reservations", function(req, res) {
  return res.json(data.reservations)
});

app.get("/api/waitlist", function(req, res) {
  return res.json(data.waitlist)
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  visitorCount++;
});
  
 app.get("/api/clear", function(req, res) {
    data.reservations.length = 0;
    data.waitlist.length = 0;
    res.json(data);
  });
  
  app.get("/api/visitors", function(req, res) {
    res.json(visitorCount);
  });

