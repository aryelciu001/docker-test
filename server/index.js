const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.send("hello world");
});

app.listen(3001, () => {
  console.log("connected");
});
