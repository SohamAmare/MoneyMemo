import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const MonthlyExpenseChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [chartType, setChartType] = useState("Bar");
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

        const months = Object.keys(data);
        const amounts = Object.values(data);

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

        const monthColors = [
          "#FF6384", // January - Red
          "#36A2EB", // February - Blue
          "#FFCE56", // March - Yellow
          "#4BC0C0", // April - Teal
          "#9966FF", // May - Purple
          "#FF9F40", // June - Orange
          "#C9CBCF", // July - Grey
          "#FF77A9", // August - Pink
          "#8AC926", // September - Lime Green
          "#FF7F50", // October - Coral
          "#3A86FF", // November - Light Blue
          "#8338EC", // December - Violet
        ];

        setChartData({
          labels: sortedMonths,
          datasets: [
            {
              label: "Monthly Expenses",
              data: sortedAmounts,
              backgroundColor: monthColors,
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

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  const renderChart = () => {
    const commonOptions = {
      responsive: true,
      maintainAspectRatio: true, // Ensure maintain aspect ratio
      layout: {
        padding: 20,
      },
      plugins: {
        legend: {
          position: "top",
        },
      },
    };

    switch (chartType) {
      case "Line":
        return <Line data={chartData} options={commonOptions} />;
      case "Pie":
        return (
          <Pie
            data={chartData}
            options={{
              ...commonOptions,
              aspectRatio: 1.5,
            }}
          />
        );
      case "Radar":
        return (
          <Radar
            data={chartData}
            options={{
              ...commonOptions,
              aspectRatio: 1.5,
            }}
          />
        );
      case "Bar":
      default:
        return (
          <Bar
            data={chartData}
            options={{
              ...commonOptions,
              aspectRatio: 1.5,
            }}
          />
        );
    }
  };

  if (!chartData.labels.length || !chartData.datasets.length) {
    return <div className="text-center text-gray-500">Loading...</div>; // Loading indicator
  }

  return (
    <div className="max-w-4xl mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Monthly Expenses
      </h2>
      <div className="flex justify-center space-x-4 mb-5">
        <button
          onClick={() => handleChartTypeChange("Bar")}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600"
        >
          Bar
        </button>
        <button
          onClick={() => handleChartTypeChange("Line")}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600"
        >
          Line
        </button>
        <button
          onClick={() => handleChartTypeChange("Pie")}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600"
        >
          Pie
        </button>
        <button
          onClick={() => handleChartTypeChange("Radar")}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-600"
        >
          Radar
        </button>
      </div>
      <div className="h-96 flex justify-center items-center">
        {" "}
        {/* Increased height and centered flex */}
        {renderChart()}
      </div>
    </div>
  );
};

export default MonthlyExpenseChart;

// ----------------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import { Bar, Line, Pie, Radar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   ArcElement,
//   PointElement,
//   RadialLinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register the required components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   ArcElement,
//   PointElement,
//   RadialLinearScale,
//   Title,
//   Tooltip,
//   Legend
// );

// const MonthlyExpenseChart = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//   });
//   const [chartType, setChartType] = useState("Bar");
//   const token = localStorage.getItem("authToken");

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

//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const data = await response.json();
//         console.log("Fetched Monthly Expenses:", data);

//         const months = Object.keys(data);
//         const amounts = Object.values(data);

//         const monthOrder = [
//           "Jan",
//           "Feb",
//           "Mar",
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//           "Oct",
//           "Nov",
//           "Dec",
//         ];
//         const sortedMonths = monthOrder.filter((month) =>
//           months.includes(month)
//         );
//         const sortedAmounts = sortedMonths.map((month) => data[month]);

//         const monthColors = [
//           "#FF6384", // January - Red
//           "#36A2EB", // February - Blue
//           "#FFCE56", // March - Yellow
//           "#4BC0C0", // April - Teal
//           "#9966FF", // May - Purple
//           "#FF9F40", // June - Orange
//           "#C9CBCF", // July - Grey
//           "#FF77A9", // August - Pink
//           "#8AC926", // September - Lime Green
//           "#FF7F50", // October - Coral
//           "#3A86FF", // November - Light Blue
//           "#8338EC", // December - Violet
//         ];

//         setChartData({
//           labels: sortedMonths,
//           datasets: [
//             {
//               label: "Monthly Expenses",
//               data: sortedAmounts,
//               backgroundColor: monthColors,
//               borderWidth: 2,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching monthly expenses:", error);
//       }
//     };

//     fetchMonthlyExpenses();
//   }, [token]);

//   const handleChartTypeChange = (type) => {
//     setChartType(type);
//   };

//   const renderChart = () => {
//     const commonOptions = {
//       responsive: true,
//       maintainAspectRatio: false,
//       layout: {
//         padding: 20,
//       },
//       plugins: {
//         legend: {
//           position: "top",
//         },
//       },
//     };

//     switch (chartType) {
//       case "Line":
//         return <Line data={chartData} options={commonOptions} />;
//       case "Pie":
//         return (
//           <Pie
//             data={chartData}
//             options={{
//               ...commonOptions,
//               aspectRatio: 1.5,
//             }}
//           />
//         );
//       case "Radar":
//         return (
//           <Radar
//             data={chartData}
//             options={{
//               ...commonOptions,
//               aspectRatio: 1.5,
//             }}
//           />
//         );
//       case "Bar":
//       default:
//         return (
//           <Bar
//             data={chartData}
//             options={{
//               ...commonOptions,
//               aspectRatio: 1.5,
//             }}
//           />
//         );
//     }
//   };

//   if (!chartData.labels.length || !chartData.datasets.length) {
//     return <div>Loading...</div>; // or any loading indicator
//   }

//   return (
//     <div style={{ width: "100%", height: "500px" }}>
//       <h2>Monthly Expenses</h2>
//       <div>
//         <button onClick={() => handleChartTypeChange("Bar")}>Bar</button>
//         <button onClick={() => handleChartTypeChange("Line")}>Line</button>
//         <button onClick={() => handleChartTypeChange("Pie")}>Pie</button>
//         <button onClick={() => handleChartTypeChange("Radar")}>Radar</button>
//       </div>
//       {renderChart()}
//     </div>
//   );
// };

// export default MonthlyExpenseChart;

// ----------------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import { Bar, Line, Pie, Radar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   ArcElement,
//   PointElement,
//   RadialLinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register the required components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   ArcElement,
//   PointElement,
//   RadialLinearScale, // Register for Radar chart
//   Title,
//   Tooltip,
//   Legend
// );

// const MonthlyExpenseChart = () => {
//   const [chartData, setChartData] = useState({
//     labels: [], // Initialize labels as an empty array
//     datasets: [], // Initialize datasets as an empty array
//   });
//   const [chartType, setChartType] = useState("Bar"); // State to manage chart type
//   const token = localStorage.getItem("authToken");

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

//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const data = await response.json();
//         console.log("Fetched Monthly Expenses:", data);

//         const months = Object.keys(data); // Get the month names (e.g., ["Jan", "Feb", "Mar"])
//         const amounts = Object.values(data); // Get the total amounts (e.g., [500, 300, 400])

//         const monthOrder = [
//           "Jan",
//           "Feb",
//           "Mar",
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//           "Oct",
//           "Nov",
//           "Dec",
//         ];
//         const sortedMonths = monthOrder.filter((month) =>
//           months.includes(month)
//         );
//         const sortedAmounts = sortedMonths.map((month) => data[month]);

//         const monthColors = [
//           "#FF6384", // January - Red
//           "#36A2EB", // February - Blue
//           "#FFCE56", // March - Yellow
//           "#4BC0C0", // April - Teal
//           "#9966FF", // May - Purple
//           "#FF9F40", // June - Orange
//           "#C9CBCF", // July - Grey
//           "#FF77A9", // August - Pink
//           "#8AC926", // September - Lime Green
//           "#FF7F50", // October - Coral
//           "#3A86FF", // November - Light Blue
//           "#8338EC", // December - Violet
//         ];

//         setChartData({
//           labels: sortedMonths,
//           datasets: [
//             {
//               label: "Monthly Expenses",
//               data: sortedAmounts,
//               backgroundColor: monthColors, // Assign colors to each month
//               borderWidth: 2,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching monthly expenses:", error);
//       }
//     };

//     fetchMonthlyExpenses();
//   }, [token]);

//   const handleChartTypeChange = (type) => {
//     setChartType(type);
//   };

//   const renderChart = () => {
//     const commonOptions = {
//       responsive: true,
//       maintainAspectRatio: false, // Allows control of size
//       layout: {
//         padding: 20, // Add padding to make charts smaller
//       },
//       plugins: {
//         legend: {
//           position: "top", // Adjust legend position for all charts
//         },
//       },
//     };

//     switch (chartType) {
//       case "Line":
//         return <Line data={chartData} options={commonOptions} />;
//       case "Pie":
//         return (
//           <Pie
//             data={chartData}
//             options={{
//               ...commonOptions,
//               aspectRatio: 1.5, // Make the pie chart a bit smaller
//             }}
//           />
//         );
//       case "Radar":
//         return (
//           <Radar
//             data={chartData}
//             options={{
//               ...commonOptions,
//               aspectRatio: 1.5, // Adjust radar chart size
//             }}
//           />
//         );
//       case "Bar":
//       default:
//         return (
//           <Bar
//             data={chartData}
//             options={{
//               ...commonOptions,
//               aspectRatio: 1.5, // Adjust bar chart size
//             }}
//           />
//         );
//     }
//   };

//   if (!chartData.labels.length || !chartData.datasets.length) {
//     return <div>Loading...</div>; // or any loading indicator
//   }

//   return (
//     <div style={{ width: "100%", height: "500px" }}>
//       <h2>Monthly Expenses</h2>
//       <div>
//         <button onClick={() => handleChartTypeChange("Bar")}>Bar</button>
//         <button onClick={() => handleChartTypeChange("Line")}>Line</button>
//         <button onClick={() => handleChartTypeChange("Pie")}>Pie</button>
//         <button onClick={() => handleChartTypeChange("Radar")}>Radar</button>
//       </div>
//       {renderChart()}
//     </div>
//   );
// };

// export default MonthlyExpenseChart;
// ----------------------------------------------------------------------
//main code v

// src/components/MonthlyExpenseChart.jsx
// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register the required components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const MonthlyExpenseChart = () => {
//   const [chartData, setChartData] = useState({
//     labels: [], // Initialize labels as an empty array
//     datasets: [], // Initialize datasets as an empty array
//   });
//   const token = localStorage.getItem("authToken");

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

//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const data = await response.json();
//         console.log("Fetched Monthly Expenses:", data);

//         // Extract month names and amounts
//         const months = Object.keys(data); // Get the month names (e.g., ["Jan", "Feb", "Mar"])
//         const amounts = Object.values(data); // Get the total amounts (e.g., [500, 300, 400])

//         // Create a sorted array of months (optional, depending on your requirements)
//         const monthOrder = [
//           "Jan",
//           "Feb",
//           "Mar",
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//           "Oct",
//           "Nov",
//           "Dec",
//         ];
//         const sortedMonths = monthOrder.filter((month) =>
//           months.includes(month)
//         );
//         const sortedAmounts = sortedMonths.map((month) => data[month]);

//         // Update chartData only if we have valid data
//         setChartData({
//           labels: sortedMonths,
//           datasets: [
//             {
//               label: "Monthly Expenses",
//               data: sortedAmounts,
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
//   }, [token]);

//   // Check if the chartData is valid before rendering the chart
//   if (!chartData.labels.length || !chartData.datasets.length) {
//     return <div>Loading...</div>; // or any loading indicator
//   }

//   return (
//     <div style={{ width: "100%", height: "400px" }}>
//       {" "}
//       {/* Set a fixed height */}
//       <h2>Monthly Expenses</h2>
//       <Bar
//         data={chartData}
//         options={{ responsive: true, maintainAspectRatio: true }} // Maintain aspect ratio
//       />
//     </div>
//   );
// };

// export default MonthlyExpenseChart;

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
