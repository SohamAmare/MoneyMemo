import React, { useEffect, useState } from "react";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ExpenseItem from "../components/ExpenseItem";
import Navbar from "../components/Navbar";

function AddExp() {
  const [expenses, setExpenses] = useState([]);
  const [token] = useState(localStorage.getItem("authToken"));
  const [count, setCount] = useState(1);
  const [render, setRender] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/expenses/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setExpenses(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchExpenses();
  }, [render]);

  return (
    <div className="App">
      <Navbar /> {/* Navbar at the top */}
      {/* Add padding to avoid content being overlapped by the navbar */}
      <div className="container mx-auto pt-20 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Recurring Expense Notification
        </h1>
        <AddExpenseForm
          render={render}
          setRender={setRender}
          changeFunction={setCount}
        />

        {count >= 0 ? (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Expense List
            </h2>
            {expenses && expenses.length > 0 ? (
              expenses.map((expense) => (
                <ExpenseItem key={expense._id} expense={expense} />
              ))
            ) : (
              <p className="text-gray-500">No expenses to show.</p>
            )}
          </div>
        ) : null}

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => {
              navigate("/analytics");
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Analytics
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddExp;

// ----------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import ExpenseList from "../components/ExpenseList";
// import AddExpenseForm from "../components/AddExpenseForm";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import ExpenseItem from "../components/ExpenseItem";
// import Navbar from "../components/Navbar";

// function AddExp() {
//   const [expenses, setExpenses] = useState([]);
//   const [token] = useState(localStorage.getItem("authToken"));
//   const [count, setCount] = useState(1);
//   const [render, setRender] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchExpenses = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/expenses/all", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setExpenses(res.data);
//       } catch (err) {
//         console.log(err.message);
//       }
//     };
//     fetchExpenses();
//   }, [render]);

//   return (
//     <div className="App">
//       <Navbar /> {/* Navbar at the top */}
//       {/* Add padding to avoid content being overlapped by the navbar */}
//       <div className="container" style={{ paddingTop: "80px" }}>
//         <h1>Recurring Expense Notification</h1>
//         <AddExpenseForm
//           render={render}
//           setRender={setRender}
//           changeFunction={setCount}
//         />

//         {count >= 0 ? (
//           <div>
//             <h2>Expense List</h2>
//             {expenses && expenses.length > 0 ? (
//               expenses.map((expense) => (
//                 <ExpenseItem key={expense._id} expense={expense} />
//               ))
//             ) : (
//               <p>No expenses to show.</p>
//             )}
//           </div>
//         ) : null}

//         <button
//           onClick={() => {
//             navigate("/analytics");
//           }}
//         >
//           Analytics
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AddExp;

// ------------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import ExpenseList from "../components/ExpenseList";
// import AddExpenseForm from "../components/AddExpenseForm";
// import { Navigate, useNavigate } from "react-router-dom";
// import axios from "axios";
// import ExpenseItem from "../components/ExpenseItem";
// import Navbar from "../components/Navbar";
// function AddExp() {
//   const [expenses, setExpenses] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("authToken"));
//   const [count, setCount] = useState(1);
//   // const handleAddExpense = (newExpense) => {
//   //   setExpenses([...expenses, newExpense]);
//   // };
//   const [render, setRender] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchExpenses = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/expenses/all", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setExpenses(res.data);
//       } catch (err) {
//         console.log(err.message);
//       }
//     };
//     fetchExpenses();
//   }, [render]);

//   return (
//     <div className="App">
//       {/* <Navbar /> */}
//       <div>
//         <h1>Recurring Expense Notification</h1>
//         {/* Form to add new expense */}
//         <AddExpenseForm
//           render={render}
//           setRender={setRender}
//           // onAdd={handleAddExpense}
//           changeFunction={setCount} /*token={token}*/
//         />

//         {/* List of all expenses */}
//         {count >= 0 ? (
//           <div>
//             <h2>Expense List</h2>
//             {expenses && expenses.length > 0 ? (
//               expenses.map((expense) => (
//                 <ExpenseItem key={expense._id} expense={expense} />
//               ))
//             ) : (
//               <p>No expenses to show.</p>
//             )}
//           </div>
//         ) : (
//           <></>
//         )}
//       </div>
//       <button
//         onClick={() => {
//           navigate("/analytics");
//         }}
//       >
//         Analytics
//       </button>
//     </div>
//   );
// }

// export default AddExp;

// -------------------------------------------------------------------------------

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
// ----------------------------------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import ExpenseList from "../components/ExpenseList";
// import AddExpenseForm from "../components/AddExpenseForm";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import ExpenseItem from "../components/ExpenseItem";
// import Navbar from "../components/Navbar"; // Import Navbar component

// function AddExp() {
//   const [expenses, setExpenses] = useState([]);
//   const [token] = useState(localStorage.getItem("authToken"));
//   const [count, setCount] = useState(1);
//   const [render, setRender] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchExpenses = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/expenses/all", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setExpenses(res.data);
//       } catch (err) {
//         console.log(err.message);
//       }
//     };
//     fetchExpenses();
//   }, [render]);

//   return (
//     <div className="App">
//       <Navbar /> {/* Navbar will automatically show the correct buttons */}
//       <div className="container">
//         <h1>Recurring Expense Notification</h1>
//         <AddExpenseForm
//           render={render}
//           setRender={setRender}
//           changeFunction={setCount}
//         />

//         {count >= 0 ? (
//           <div>
//             <h2>Expense List</h2>
//             {expenses && expenses.length > 0 ? (
//               expenses.map((expense) => (
//                 <ExpenseItem key={expense._id} expense={expense} />
//               ))
//             ) : (
//               <p>No expenses to show.</p>
//             )}
//           </div>
//         ) : null}

//         <button
//           onClick={() => {
//             navigate("/analytics");
//           }}
//         >
//           Analytics
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AddExp;
