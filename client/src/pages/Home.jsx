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

import React, { useState } from "react";
// import VoiceCommands from "./components/VoiceCommands";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import { Navigate, useNavigate } from "react-router-dom";
// import RegisterForm from "../components/RegisterForm";
// import LoginForm from "../components/LoginForm";

function Home() {
  const [expenses, setExpenses] = useState([]);
  const token = localStorage.getItem("authToken");
  const [count, setCount] = useState(1);
  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <h1>Recurring Expense Notification</h1>
        {/* Form to add new expense */}
        <AddExpenseForm
          onAdd={handleAddExpense}
          changeFunction={setCount} /*token={token}*/
        />

        {/* List of all expenses */}
        {count >= 0 ? <ExpenseList expenses={expenses} token={token} /> : <></>}
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
