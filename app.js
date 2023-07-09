// DEPENDENCCIES
const express = require("express");
const morgan = require("morgan");

let controller = require("./controllers/controller");

// CONFIGURATION
const app = express();
app.use(morgan("dev"));
app.use(express.json());

// ROUTES
app.use("/transactions", controller);

app.get("/transactions", (req, res) => {
  console.log("Here");
  res.send(transactions);
});

// EXPORT
module.exports = app;
