const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.get("/blogs", (req, res) => {
    const query = req.query;
    console.log("Query params:", query);
  res.send("List of blogs");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
