const express = require("express");
const cors = require("cors");
const userRoute = require("./Router/userRoute");
const chatRoute = require("./Router/chatRoute");
const messageRoute = require("./Router/messageRoute");

const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const uri = process.env.URI;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to chat app");
});
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port:${PORT}`);
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((e) => {
    console.error("Connection failed!", e);
  });
