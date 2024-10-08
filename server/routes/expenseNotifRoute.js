// @ts-nocheck

const express = require("express");
const {
  createExpenseForNotif,
  getAllExpenses,
  deleteExpense,
} = require("../controllers/expenseNotifController");

const authMiddleware = require("../middleware/Middleware");

const router = express.Router();

router.post("/add", authMiddleware, createExpenseForNotif);
router.get("/all", authMiddleware, getAllExpenses);
router.delete("/delete/:id", deleteExpense);

module.exports = router;

// const express = require("express");
// const {
//   createExpenseForNotif,
// } = require("../controllers/expenseNotifController");

// const router = express.Router();

// router.post("/addExp", createExpenseForNotif);

// module.exports = router;
