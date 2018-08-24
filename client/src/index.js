const express = require("express");
const body_parser = require("body-parser");
const rp = require("request-promise-native");
const moment = require("moment");

var app = express();

app.set("view engine", "pug");
app.set("port", process.env.PORT || 3000);
app.use(body_parser.json());

app.post("/chat", (req, res) => {
  let options = {
    method: "POST",
    uri: process.env.API_URL,
    body: {
      username: req.body.username,
      message: req.body.message
    },
    json: true
  };

  rp(options).then(() => {
    res.status(200).send();
  });
});

app.get("/chat", (req,res) => {
  rp(process.env.API_URL)
  .then((data) =>
    res.render(
      "chat", {
        data: JSON.parse(data),
        moment: moment
      }
    ));
});

app.get("/", (req, res) => {
  res.render(
    "index", {
      title: "Simple Chat Client",
      header: "Chat Client"
  });
});

app.listen(app.get("port"), () => {
  console.log("Client started");
});