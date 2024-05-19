const express = require("express");
const app = express();

app.get("/demo", (req, res) => {
  res.send("hello demo");
});

const PORT = 3000;

mongoose
  .connect(
    "mongodb+srv://thonglaptrinhvien:tJEye3yw6ATaCE*@cluster0.zhntbql.mongodb.net/blogs?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT || PORT, () => {
      console.log("Server runing on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
