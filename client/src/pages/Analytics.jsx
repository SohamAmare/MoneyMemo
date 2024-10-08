import React from "react";
import "../App.css";
import MonthlyExpenseChart from "../components/MonthlyExpenseChart";
import Navbar from "../components/Navbar"; // Import Navbar component

function Analytics() {
  return (
    <>
      <Navbar /> {/* Navbar will automatically show the correct buttons */}
      <div className="container mx-auto pt-20 px-4">
        {/* Adjust padding based on the height of the Navbar */}
        <MonthlyExpenseChart />
      </div>
    </>
  );
}

export default Analytics;

// -------------------------------------------------------------

// import React from "react";
// import "../App.css";
// import MonthlyExpenseChart from "../components/MonthlyExpenseChart";
// import Navbar from "../components/Navbar"; // Import Navbar component

// function Analytics() {
//   return (
//     <>
//       <Navbar /> {/* Navbar will automatically show the correct buttons */}
//       <div className="container" style={{ paddingTop: "80px" }}>
//         {/* Adjust padding based on the height of the Navbar */}
//         <MonthlyExpenseChart />
//       </div>
//     </>
//   );
// }

// export default Analytics;

// -------------------------------------------------------------

// import React from "react";
// import "../App.css";
// import MonthlyExpenseChart from "../components/MonthlyExpenseChart";
// import Navbar from "../components/Navbar"; // Import Navbar component

// function Analytics() {
//   return (
//     <>
//       <Navbar /> {/* Navbar will automatically show the correct buttons */}
//       <div className="container">
//         <MonthlyExpenseChart />
//       </div>
//     </>
//   );
// }

// export default Analytics;

// ----------------------------------------------------------------------

// import React from "react";
// import "../App.css";
// import MonthlyExpenseChart from "../components/MonthlyExpenseChart";
// import Navbar from "../components/Navbar"; // Import Navbar component

// function Analytics() {
//   return (
//     <>
//       <Navbar /> {/* Add Navbar component */}
//       <div className="container">
//         <MonthlyExpenseChart />
//       </div>
//     </>
//   );
// }

// export default Analytics;
