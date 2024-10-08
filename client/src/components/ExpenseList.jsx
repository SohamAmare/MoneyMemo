import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ token }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/expenses/all",
          /*here i made a change*/ {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setExpenses(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchExpenses();
  });

  return (
    <div>
      <h2>Expense List</h2>
      {expenses.length > 0 ? (
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
