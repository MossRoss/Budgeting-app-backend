const { v4: uuidv4 } = require("uuid");
module.exports = [
  {
    id: uuidv4(),
    item_name: "Salary",
    amount: 200000,
    date: "Feb 2, 2023",
    from: "Apple",
    category: "Income",
  },
  {
    id: uuidv4(),
    item_name: "Mortage",
    amount: 1200,
    date: "Jan 4, 2023",
    from: "Bank",
    category: "Expense",
  },
  {
    id: uuidv4(),
    item_name: "Shopping",
    amount: 350,
    date: "Feb 13, 2023",
    from: "Wholefoods",
    category: "Grocery",
  },
];
