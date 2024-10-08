import React from "react";
import axios from "axios";

const ExpenseItem = ({ expense }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/expenses/delete/${expense._id}`
      );
      alert("Expense deleted!");
    } catch (err) {
      console.log("err.message");
    }
  };
  return (
    <div>
      <h4>{expense.description}</h4>
      <p>Due Date: {new Date(expense.dueDate).toLocaleDateString()}</p>
      <p>{expense.isRecurring ? "Recurring" : "One-time"}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
