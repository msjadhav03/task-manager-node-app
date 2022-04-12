const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("", require("./routes/CreateNewTaskRoute"));
app.use("", require("./routes/DeleteTaskController"));
app.use("", require("./routes/ReadAllTaskRoute"));
app.use("", require("./routes/UpdateTaskRoute"));

app.use("*", (req, res) => {
  res.status(404).json({
    code: 404,
    name: "page_not_found",
    message: "404 Page not found",
  });
});

module.exports = app;
