import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/analytics"
            element={
              <>
                <Analytics />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import React, { useState } from "react";
// import VoiceCommands from "./components/VoiceCommands";
// import ExpenseList from "./components/ExpenseList";
// import AddExpenseForm from "./components/AddExpenseForm";
// import RegisterForm from "./components/RegisterForm";
// import LoginForm from "./components/LoginForm";

// function App() {
//   const [expenses, setExpenses] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const token = localStorage.getItem("authToken");

//   const handleAddExpense = (newExpense) => {
//     setExpenses([...expenses, newExpense]);
//   };

//   const handleLogin = (loginToken) => {
//     setIsAuthenticated(true); // Mark the user as authenticated after login
//   };

//   return (
//     <div className="App">
//       {/* <h1>MoneyMemo - Voice Activated Feature</h1>
//       <p>
//         <h2>
//           User Should Know: the voice command should include the terms like "add
//           expense", "show budget", "Send Reminder"
//         </h2>
//       </p>
//       <VoiceCommands /> */}

//       {/* Check if user is authenticated */}
//       {!isAuthenticated ? (
//         <div>
//           <h2>Register</h2>
//           <RegisterForm />
//           <h2>Login</h2>
//           <LoginForm onLogin={handleLogin} />
//         </div>
//       ) : (
//         <div>
//           <h1>Recurring Expense Notification</h1>
//           {/* Form to add new expense */}
//           <AddExpenseForm onAdd={handleAddExpense} /*token={token}*/ />

//           {/* List of all expenses */}
//           <ExpenseList expenses={expenses} token={token} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
