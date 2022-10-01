const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.get("/", (req, res) => {

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayOfTheWeek = new Date().getDay();
  let today = weekdays[dayOfTheWeek];

  res.render('list', {today: today});
});

// Depending on whether you're running local or hosted the port may be different
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Listening on port " + port + ".");
});
