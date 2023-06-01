const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();

//template engine

app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "temp/index.html"));

  res.render("index");
});

const port = 3000;

app.listen(port, () => {
  console.log(`sunucu ${port} portunda çalışıyor`);
});
