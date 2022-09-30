const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {
  res.send("Hello");
});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Listening on port " + port + ".");
});
