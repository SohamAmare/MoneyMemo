// src/components/MonthlyExpenseChart.jsx

// src/components/MonthlyExpenseChart.jsx
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MonthlyExpenseChart = () => {
  const [chartData, setChartData] = useState({
    labels: [], // Initialize labels as an empty array
    datasets: [], // Initialize datasets as an empty array
  });
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchMonthlyExpenses = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/chartexpenses/monthly",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log("Fetched Monthly Expenses:", data);

        // Extract month names and amounts
        const months = Object.keys(data); // Get the month names (e.g., ["Jan", "Feb", "Mar"])
        const amounts = Object.values(data); // Get the total amounts (e.g., [500, 300, 400])

        // Create a sorted array of months (optional, depending on your requirements)
        const monthOrder = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const sortedMonths = monthOrder.filter((month) =>
          months.includes(month)
        );
        const sortedAmounts = sortedMonths.map((month) => data[month]);

        // Update chartData only if we have valid data
        setChartData({
          labels: sortedMonths,
          datasets: [
            {
              label: "Monthly Expenses",
              data: sortedAmounts,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching monthly expenses:", error);
      }
    };

    fetchMonthlyExpenses();
  }, [token]);

  // Check if the chartData is valid before rendering the chart
  if (!chartData.labels.length || !chartData.datasets.length) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <div style={{ width: "100%", height: "400px" }}>
      {" "}
      {/* Set a fixed height */}
      <h2>Monthly Expenses</h2>
      <Bar
        data={chartData}
        options={{ responsive: true, maintainAspectRatio: true }} // Maintain aspect ratio
      />
    </div>
  );
};

export default MonthlyExpenseChart;

// // src/components/MonthlyExpenseChart.jsx
// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// // import axios from "axios";

// const MonthlyExpenseChart = () => {
//   const [chartData, setChartData] = useState({});
//   const [token, setToken] = useState(localStorage.getItem("authToken"));
//   useEffect(() => {
//     const fetchMonthlyExpenses = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:5000/api/chartexpenses/monthly",
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         const data = await response.json();
//         console.log("SOHAM", data);
//         // Process the data to get monthly expenses
//         // const labels = data.map((expense) => expense.month);
//         // const expenses = data.map((expense) => expense.totalAmount);

//         const months = [];
//         const amount = [];
//         console.log("array");
//         for (let key in data) {
//           if (data.hasOwnProperty(key)) {
//             months.push(key);
//             amount.push(data[key]);
//             console.log(`${key}: ${data[key]}`);
//           }
//         }
//         console.log(months);
//         console.log(amount);
//         setChartData({
//           labels: months,
//           datasets: [
//             {
//               label: "Monthly Expenses",
//               data: amount,
//               backgroundColor: "rgba(75, 192, 192, 0.6)",
//               borderWidth: 2,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching monthly expenses:", error);
//       }
//     };

//     fetchMonthlyExpenses();
//   }, []);

//   return (
//     <div>
//       <h2>Monthly Expenses</h2>
//       <Bar
//         data={chartData}
//         options={{ responsive: true, maintainAspectRatio: false }}
//       />
//     </div>
//   );
// };

// export default MonthlyExpenseChart;
