const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hell from my containerized Node.js app, testing");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
