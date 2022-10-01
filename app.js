const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.get("/", (req, res) => {

  res.render('list', {foo: 'FOO'});
});

// Depending on whether you're running local or hosted the port may be different
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Listening on port " + port + ".");
});
