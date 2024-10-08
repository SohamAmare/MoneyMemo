import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expense, token }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses(expense);
  }, [expense]);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Expense List</h2>
      <div className="grid grid-cols-1 gap-4">
        {expenses && expenses.length > 0 ? (
          expenses.map((expense) => (
            <ExpenseItem key={expense._id} expense={expense} />
          ))
        ) : (
          <p className="text-gray-500">No expenses to show.</p>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;

// -----------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ExpenseItem from "./ExpenseItem";

// const ExpenseList = ({ expense, token }) => {
//   const [expenses, setExpenses] = useState({});
//   const [render, reRender] = useState();
//   useEffect(() => {
//     setExpenses(expense);
//   }, [expense]);

//   return (
//     <div>
//       <h2>Expense List</h2>
//       {expenses && expenses.length > 0 ? (
//         expenses.map((expense) => (
//           <ExpenseItem key={expense._id} expense={expense} />
//         ))
//       ) : (
//         <p>No expenses to show.</p>
//       )}
//     </div>
//   );
// };

// export default ExpenseList;
