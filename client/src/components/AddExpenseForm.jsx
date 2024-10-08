// @ts-nocheck

// @ts-nocheck

import React, { useState } from "react";
import axios from "axios";

function AddExpenseForm(props) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("authToken"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExpense = {
      description,
      amount,
      dueDate,
      isRecurring,
    };

    try {
      const res = await fetch("http://localhost:5000/api/expenses/add", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newExpense),
      });

      alert("Expense added successfully!");
      props.setRender(!props.render);
      setDescription("");
      setAmount("");
      setDueDate("");
      setIsRecurring(false);
    } catch (err) {
      console.error(err.message);
      alert("Failed to add expense.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-2xl mb-4 font-bold text-gray-700">Add New Expense</h2>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
      />
      <label className="block text-gray-700 mb-2">
        Recurring:
        <input
          type="checkbox"
          checked={isRecurring}
          onChange={(e) => setIsRecurring(e.target.checked)}
          className="ml-2"
        />
      </label>
      <button
        type="submit"
        onClick={() => {
          props.changeFunction(2);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
      >
        Add Expense
      </button>
    </form>
  );
}

export default AddExpenseForm;

// ----------------------------------------------------------------------

// import React, { useState } from "react";
// import axios from "axios";

// function AddExpenseForm(props) {
//   const [description, setDescription] = useState("");
//   const [amount, setAmount] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [isRecurring, setIsRecurring] = useState(false);
//   const [token, setToken] = useState(localStorage.getItem("authToken"));
//   // const [render, setRender] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("soham amare", token);
//     const newExpense = {
//       description,
//       amount,
//       dueDate,
//       isRecurring,
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/expenses/add", {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(newExpense),
//       });

//       console.log("Expense added:", res);
//       alert("Expense added successfully!");
//       props.setRender(!props.render);

//       // props.setExpense({});
//       // props.onAdd(res.data); // Update parent with new expense
//       setDescription("");
//       setAmount("");
//       setDueDate("");
//       setIsRecurring(false);
//     } catch (err) {
//       console.error(err.message);
//       alert("Failed to add expense.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         required
//       />
//       <input
//         type="number"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         required
//       />
//       <input
//         type="date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//         required
//       />
//       <label>
//         Recurring:
//         <input
//           type="checkbox"
//           checked={isRecurring}
//           onChange={(e) => setIsRecurring(e.target.checked)}
//         />
//       </label>
//       <button
//         type="submit"
//         onClick={() => {
//           props.changeFunction(2);
//         }}
//       >
//         Add Expense
//       </button>
//     </form>
//   );
// }

// export default AddExpenseForm;

// --------------------------------------------------------------------

// import React, { useState } from "react";
// import axios from "axios";

// const AddExpenseForm = ({ addOn }) => {
//   const [description, setDescription] = useState("");
//   const [amount, setAmount] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [isRecurring, setIsRecurring] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newExpense = {
//       description,
//       amount,
//       dueDate,
//       isRecurring,
//       userId: "YOUR_USER_ID",
//     };

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/expenses/add",
//         newExpense
//       );
//       onAdd(res.data);
//       setDescription("");
//       setAmount("");
//       setDueDate("");
//       setIsRecurring(false);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         required
//       />
//       <input
//         type="number"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         required
//       />
//       <input
//         type="date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//         required
//       />
//       <label>
//         {" "}
//         Recurring:
//         <input
//           type="checkbox"
//           checked={isRecurring}
//           onChange={setIsRecurring(e.target.checked)}
//         />
//       </label>
//       <button type="submit">Add Expense</button>
//     </form>
//   );
// };

// export default AddExpenseForm;
