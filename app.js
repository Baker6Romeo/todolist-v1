const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["Buy Food","Cook Food","EatFood"];
let workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/", (req, res) => {

  let dayOfTheWeek = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  let today = dayOfTheWeek.toLocaleDateString("en-US", options);

  res.render('list', {list: items, listTitle: today});
});

app.get("/work", (req, res) => {
  res.render('list', {list: workItems, listTitle: "Work List"})
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/")
  }
});



// Depending on whether you're running local or hosted the port may be different
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Listening on port " + port + ".");
});
