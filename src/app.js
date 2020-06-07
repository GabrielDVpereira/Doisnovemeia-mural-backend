const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

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

module.exports = app;
