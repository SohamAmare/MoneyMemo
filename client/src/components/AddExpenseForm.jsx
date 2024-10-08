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

    console.log("soham amare", token);
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

      console.log("Expense added:", res);
      alert("Expense added successfully!");
      props.onAdd(res.data); // Update parent with new expense
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <label>
        Recurring:
        <input
          type="checkbox"
          checked={isRecurring}
          onChange={(e) => setIsRecurring(e.target.checked)}
        />
      </label>
      <button
        type="submit"
        onClick={() => {
          props.changeFunction(2);
        }}
      >
        Add Expense
      </button>
    </form>
  );
}

export default AddExpenseForm;

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
