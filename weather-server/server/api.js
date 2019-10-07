const express = require("express");
const morgan = require("morgan");
var cors = require("cors");

const { NODE_ENV } = process.env;

if (!(NODE_ENV && NODE_ENV === "staging")) {
  require("dotenv").config();
}

const locationRouter = require("./modules/location/location.router");
const { errorHandler, notFound } = require("./middleware/errors.handler");

const app = express();

// apply middleware
app.use(morgan("dev"));
app.use(cors());

// test routing
app.get("/api", (req, res) => {
  res.status(200).json({ express: "Hello From Express" });
});

// actual routing
app.use("/api/locations", locationRouter);

// central error handling
app.use(errorHandler);

//when no routes were matched...
app.use("*", notFound);

module.exports = app;
