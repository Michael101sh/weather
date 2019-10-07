const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  key: Number,
  name: String
});

const LocationModel = mongoose.model("location", LocationSchema);

module.exports = LocationModel;
