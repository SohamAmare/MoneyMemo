// import React from "react";
// import "../App.css";
// import LoginForm from "../components/LoginForm";

// function Login() {
//   return (
//     <>
//       <h1>this is home page</h1>
//     </>
//   );
// }

// export default Login;

import React, { useEffect, useState } from "react";
// import VoiceCommands from "./components/VoiceCommands";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import { Navigate, useNavigate } from "react-router-dom";
// import RegisterForm from "../components/RegisterForm";
// import LoginForm from "../components/LoginForm";
import axios from "axios";
import ExpenseItem from "../components/ExpenseItem";
function Home() {
  const [expenses, setExpenses] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("authToken"));
  const [count, setCount] = useState(1);
  // const handleAddExpense = (newExpense) => {
  //   setExpenses([...expenses, newExpense]);
  // };
  const [render, setRender] = useState(false);
  const navigate = useNavigate();

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
  }, [render]);

  return (
    <div className="App">
      <div>
        <h1>Recurring Expense Notification</h1>
        {/* Form to add new expense */}
        <AddExpenseForm
          render={render}
          setRender={setRender}
          // onAdd={handleAddExpense}
          changeFunction={setCount} /*token={token}*/
        />

        {/* List of all expenses */}
        {count >= 0 ? (
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
        ) : (
          <></>
        )}
      </div>
      <button
        onClick={() => {
          navigate("/analytics");
        }}
      >
        Analytics
      </button>
    </div>
  );
}

export default Home;

{
  /* <h1>MoneyMemo - Voice Activated Feature</h1>
<p>
  <h2>
    User Should Know: the voice command should include the terms like "add
    expense", "show budget", "Send Reminder"
  </h2>
</p>
<VoiceCommands /> */
}
