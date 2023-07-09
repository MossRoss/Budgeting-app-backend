const { v4: uuidv4 } = require("uuid");
module.exports = [
  {
    id: uuidv4(),
    item_name: "income",
    amount: 200000,
    date: "May 3, 2023",
    from: "Apple",
    category: "income",
  },
  {
    id: uuidv4(),
    item_name: "mortage",
    amount: 1200,
    date: "June 3, 2023",
    from: "bank",
    category: "expense",
  },
  {
    id: uuidv4(),
    item_name: "shopping",
    amount: 350,
    date: "June 25, 2023",
    from: "Grocery",
    category: "expense",
  },
];
