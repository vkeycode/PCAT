const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// connect DB

mongoose.connect("mongodb://localhost/pcat-test-db");

// create schema

const PhotoSchema = new Schema({
  title: String,
  desc: String,
  qty: Number
});

const Photo = mongoose.model("Photo", PhotoSchema);

// create a photo

// Photo.create({
//   title: "photo title 1",
//   desc: "photo description from 1",
//   qty: 32
// });

Photo.find({}).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.error(error);
  });