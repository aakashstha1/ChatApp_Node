const express = require("express");
const cors = require("cors");
const userRoute = require("./Router/userRoute");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to chat app");
});
app.use("/api/users", userRoute);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port:${PORT}`);
});
