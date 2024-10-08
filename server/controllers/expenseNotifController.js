// @ts-nocheck

const ExpenseNotif = require("../models/expenseNotifModel");
const cron = require("node-cron");
const nodemailer = require("nodemailer");

exports.createExpenseForNotif = async (req, res) => {
  try {
    const { description, amount, dueDate, isRecurring } = req.body;
    console.log(req.body);
    const userId = req.user; // Get userId from the middleware
    console.log(description, amount, dueDate, isRecurring);
    const expense = new ExpenseNotif({
      // Create a new instance of ExpenseNotif
      description,
      amount,
      dueDate,
      isRecurring,
      userId,
    });

    await expense.save(); // Save the expense to the database

    if (isRecurring) {
      scheduleRecurringNotification(expense); // Assuming this function exists
    }

    res.status(201).json(expense); // Respond with the created expense
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: err.message });
  }
};

exports.getAllExpenses = async (req, res) => {
  try {
    const userId = req.user;
    console.log("SOHAM");
    console.log("Fetching expenses for user: ", userId);
    const expenses = await ExpenseNotif.find({ userId });
    console.log("SOHAM AMARE");
    console.log("Expenses found: ", expenses);
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpense = await ExpenseNotif.findByIdAndDelete(id);
    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

const scheduleRecurringNotification = (expense) => {
  const { dueDate, description } = expense;

  const dayBefore = new Date(dueDate);
  dayBefore.setDate(dayBefore.getDate() - 1);

  cron.schedule(
    `0 9 ${dayBefore.getDate()} ${dayBefore.getMonth() + 1} *`,
    () => {
      console.log(
        `Reminder: Your payment for '${description}' is due tomorrow!`
      );
      // Add code for sending email or SMS notification here
    }
  );
  console.log(`Recurring notification scheduled for ${expense.description}`);
};

// const ExpNotifSchema = require("../models/expenseNotifModel");
// const cron = require("node-cron");
// const nodemailer = require("nodemailer");

// exports.createExpenseForNotif = async (req, res) => {
//   try {
//     const { description, amount, dueDate, isRecurring, userId } = req.body;
//     const expense = new ExpNotifSchema({
//       description,
//       amount,
//       dueDate,
//       isRecurring,
//       userId,
//     });
//     await expense.save();

//     if (isRecurring) scheduleRecurringNotification(expense);

//     res.status(201).json(expense);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// const scheduleRecurringNotification = (expense) => {
//   const { dueDate, description } = expense;

//   const dayBefore = new Date(dueDate);
//   dayBefore.setDate(dayBefore.getDate() - 1);

//   cron.schedule(
//     `0 9 ${dayBefore.getDate()} ${dayBefore.getMonth() + 1} *`,
//     () => {
//       console.log(
//         `Reminder: Your payment for '${description}' is due tomorrow!`
//       );
//       //Here you can send an email or SMS notification
//     }
//   );
//   console.log(`Recurrent notification scheduled for ${expense.description}`);
// };
