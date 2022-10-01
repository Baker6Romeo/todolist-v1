const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {

  var today = new Date();
  if ( today.getDay() === 6 || today.getDay() === 0 ) {
    res.sendFile(__dirname + "/weekend.html");
  } else {
    res.sendFile(__dirname + "/weekday.html");
  }
});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Listening on port " + port + ".");
});
