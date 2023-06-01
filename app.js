const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const Photo = require("./models/Photo");
const app = express();

// connecnt Data base
mongoose.connect("mongodb://localhost/pcat-test-db");

//template engine

app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//render main page

app.get("/", async (req, res) => {
  // res.sendFile(path.resolve(__dirname, "temp/index.html"));
  const photos = await Photo.find({});
  res.render("index", {
    photos,
  });
});

//render about page

app.get("/about", (req, res) => {
  res.render("about");
});

// redner add page
app.get("/add", (req, res) => {
  res.render("add");
});

//
app.post("/photos", async (req, res) => {
  await Photo.create(req.body);
  res.redirect("/");
});

const port = 3000;

app.listen(port, () => {
  console.log(`sunucu ${port} portunda çalışıyor`);
});
