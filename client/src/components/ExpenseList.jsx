import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expense, token }) => {
  const [expenses, setExpenses] = useState({});
  const [render, reRender] = useState();
  useEffect(() => {
    setExpenses(expense);
  }, [expense]);

  return (
    <div>
      <h2>Expense List</h2>
      {expenses && expenses.length > 0 ? (
        expenses.map((expense) => (
          <ExpenseItem key={expense._id} expense={expense} />
        ))
      ) : (
        <p>No expenses to show.</p>
      )}
    </div>
  );
};

export default ExpenseList;
