// DEPENDENCCIES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

let controller = require("./controllers/controller");

// CONFIGURATION
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/transactions", controller);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("*", (req, res) => {
  res.status(404).send("Sorry, no page found");
});

// EXPORT
module.exports = app;
