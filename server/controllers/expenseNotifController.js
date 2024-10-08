// @ts-nocheck

const { default: mongoose } = require("mongoose");
const ExpenseNotif = require("../models/expenseNotifModel");
const cron = require("node-cron");
const nodemailer = require("nodemailer");

exports.getMonthlyExpenses = async (req, res) => {
  try {
    const userId = req.user; // Get userId from the request
    console.log("syaam", userId);
    // Convert the userId to an ObjectId properly
    const userObjectId = new mongoose.Types.ObjectId(userId);

    const months = {};
    const expense = await ExpenseNotif.find({ userId });
    console.log(expense);

    expense.map((user) => {
      console.log(String(user.dueDate).split(" ")[1]);
      const temp = months[String(user.dueDate).split(" ")[1]] || 0;
      months[String(user.dueDate).split(" ")[1]] = temp + user.amount;
    });
    console.log(months);
    res.json(months);

    // Check if expenses were found
    // if (!expenses || expenses.length === 0) {
    //   return res
    //     .status(200)
    //     .json({ message: "No expenses found for the user" });
    // }

    // // Format the aggregated result for frontend use
    // const formattedExpenses = expenses.map((expense) => ({
    //   month: expense._id, // Month number (1 for Jan, 2 for Feb, etc.)
    //   totalAmount: expense.totalAmount, // Total amount for that month
    // }));

    // // Send the formatted expenses as the response
    // res.status(200).json(formattedExpenses);
  } catch (error) {
    console.error(error); // Log any errors for debugging
    res.status(500).json({ error: error.message });
  }
};

// In expenseNotifController.js
// exports.getMonthlyExpenses = async (req, res) => {
//   try {
//     const userId = req.user; // Assuming you have user authentication middleware
//     const expenses = await ExpenseNotif.aggregate([
//       { $match: { userId } },
//       {
//         $group: {
//           _id: { $month: "$dueDate" }, // Group by month
//           totalAmount: { $sum: "$amount" }, // Sum up the amounts
//         },
//       },
//       { $sort: { _id: 1 } }, // Sort by month
//     ]);

//     console.log("hvsbker", expenses);

//     // Map the results to a more usable format
//     const formattedExpenses = expenses.map((expense) => ({
//       month: expense._id,
//       totalAmount: expense.totalAmount,
//     }));

//     res.status(200).json(formattedExpenses);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

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
  alert(`Recurring notification scheduled for ${expense.description}`);
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
