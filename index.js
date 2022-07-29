const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

console.log(process.env.N);
app.use(express.static("public"));
const winStrikeCount = process.env.N;

app.get("/" + winStrikeCount, function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
