const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(
  express.static(path.join(__dirname, "public"), {
    index: false,
  })
);

let winStrikeCount = process.env.N ? process.env.N : 4;

app.get("/" + winStrikeCount, function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(port, () => {
  console.log(`Connect ${winStrikeCount} app listening on port ${port}`);
});
