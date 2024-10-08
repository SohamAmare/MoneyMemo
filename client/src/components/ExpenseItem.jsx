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
      console.log(err.message);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 transition duration-300 ease-in-out transform hover:scale-105">
      <h4 className="text-xl font-semibold text-gray-800">
        {expense.description}
      </h4>
      <p className="text-gray-600">
        Due Date: {new Date(expense.dueDate).toLocaleDateString()}
      </p>
      <p className="text-gray-600">
        {expense.isRecurring ? "Recurring" : "One-time"}
      </p>
      <button
        onClick={handleDelete}
        className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
      >
        Delete
      </button>
    </div>
  );
};

export default ExpenseItem;

// -----------------------------------------------------------------

// import React from "react";
// import axios from "axios";

// const ExpenseItem = ({ expense }) => {
//   const handleDelete = async () => {
//     try {
//       await axios.delete(
//         `http://localhost:5000/api/expenses/delete/${expense._id}`
//       );
//       alert("Expense deleted!");
//     } catch (err) {
//       console.log("err.message");
//     }
//   };
//   return (
//     <div>
//       <h4>{expense.description}</h4>
//       <p>Due Date: {new Date(expense.dueDate).toLocaleDateString()}</p>
//       <p>{expense.isRecurring ? "Recurring" : "One-time"}</p>
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// };

// export default ExpenseItem;
