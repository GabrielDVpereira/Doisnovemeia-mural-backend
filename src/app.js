const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to mongo"))
  .catch((error) => console.log(`error to connect to Atlas DB: ${error}`));

app.use(express.json());
app.use(cors());
app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

module.exports = app;
