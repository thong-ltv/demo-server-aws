const express = require("express");
const app = express();

app.get("/demo", (req, res) => {
  res.send("hello demo");
});

const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running...");
});
