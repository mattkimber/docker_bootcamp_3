const express = require("express");
const body_parser = require("body-parser");

var app = express();
var messages = [];

app.set("port", process.env.PORT || 3000);
app.use(body_parser.json());

app.post("/", (req, res) => {
  console.log(JSON.stringify(req.body));

  messages.push({
    username: req.body.username,
    message: req.body.message,
    timestamp: new Date()
  });

  res.status(200).send();
});

app.get("/", (req, res) => {
  res.status(200).json(messages);
})

app.listen(app.get("port"), () => {
  console.log("Server started");
});