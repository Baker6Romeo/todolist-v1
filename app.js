const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const express = require("express");

const app = express();

const items = ["Buy Food","Cook Food","EatFood"];
const workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  const today = date.getDay();
  res.render('list', {list: items, listTitle: today});
});

app.get("/about", (req, res) => {
  res.render('about')
});

app.get("/work", (req, res) => {
  res.render('list', {list: workItems, listTitle: "Work List"})
});

app.post("/", (req, res) => {
  const item = req.body.newItem;
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/")
  }
});

// Depending on whether you're running local or hosted the port may be different
const port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Listening on port " + port + ".");
});
