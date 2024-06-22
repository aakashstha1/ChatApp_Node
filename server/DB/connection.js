const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/userModel")
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((e) => {
    console.error("Connection failed!", e);
  });
