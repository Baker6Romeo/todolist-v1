const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');
app.get("/", (req, res) => {

  let dayOfTheWeek = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  let today = dayOfTheWeek.toLocaleDateString("en-US", options);

  res.render('list', {today: today});
});

app.post("/", (req, res) => {
  console.log(req.body.newItem);
});

// Depending on whether you're running local or hosted the port may be different
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Listening on port " + port + ".");
});
