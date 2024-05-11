const express = require("express");

const app = express();
require("dotenv").config();
const indexHandler = require("./Handler/indexHandler");

// console.log(process.env.mongo_connect);
const mongoose = require("mongoose");
const mongo_connect = process.env.mongo_connect;

//import All models
require("./Models/movies.model");

mongoose
  .connect(mongo_connect, {})
  .then(() => {
    console.log("mongo connection was successfull");
  })
  .catch((err) => {
    console.log("connection to mongos failed");
  });

//create a model for movies ....

//Routes
app.get("/", indexHandler);

app.listen(8000, () => {
  console.log("server has started normally");
});
