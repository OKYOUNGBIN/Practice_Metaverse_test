const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("js"));
app.use(express.static("css"));
app.use(express.static("node_modules"));
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/main.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
