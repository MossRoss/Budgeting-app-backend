const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let transactions = require("../models/transactions");

// ROUTE "/"
router
  .route("/")
  .get((req, res) => {
    res.json(transactions);
  })
  .post((req, res) => {
    const { item_name, amount, date, from, category } = req.body;

    if (!item_name) {
      res.status(400).json({
        status: false,
        message: "You cannot create an empty transaction",
      });
    } else {
      const newTransaction = {
        id: uuidv4(),
        item_name,
        amount,
        date,
        from,
        category,
      };
      transactions.push(newTransaction);
      console.log(transactions);

      res.json({ status: true, data: newTransaction });
    }
  });

// ROUTE "/:id"
router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;

    const match = transactions.find((transaction) => transaction.id === id);

    if (!match) {
      res.status(404).json({ message: "Id not found" });
    } else {
      res.json(match);
    }
  })
  .delete((req, res) => {
    const { id } = req.params;

    const matchedIndex = transactions.findIndex(
      (transaction) => transaction.id === id
    );

    if (matchedIndex === -1) {
      res.status(404).json({
        status: false,
        message: "Sorry, no transaction with this ID found.",
      });
    } else {
      let newTransaction = transactions.filter(
        (transaction) => transaction.id !== req.params.id
      );

      transactions = newTransaction;

      res.json(transactions);
    }
  })
  .put((req, res) => {
    const { id } = req.params;
    console.log(id);

    const matchedIndex = transactions.findIndex(
      (transaction) => transaction.id === id
    );
    console.log(matchedIndex);
    if (matchedIndex === -1) {
      res.status(404).json({
        status: false,
        message: "Sorry, ID not found.",
      });
    } else {
      transactions.splice(matchedIndex, 1, req.body);
      let matchedTransaction = transactions[matchedIndex];
      console.log(matchedTransaction);

      res.json({ message: "success", status: true, data: matchedTransaction });
    }
  });

module.exports = router;
