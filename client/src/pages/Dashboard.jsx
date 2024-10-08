import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory for navigation

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const token = localStorage.getItem("authToken");
  const history = useHistory(); // Hook for programmatic navigation

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const userData = await response.json();
        setUserName(userData.name); // Assuming userData has a 'name' field
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]);

  const handleNavigation = (path) => {
    history.push(path); // Navigate to the desired feature
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">
        Welcome to Your Dashboard, {userName}!
      </h1>
      <p className="text-xl text-center mb-8 text-gray-600">
        Manage your expenses with ease and track your financial health.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <button
          onClick={() => handleNavigation("/add-expense")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg shadow transition duration-300 transform hover:scale-105"
        >
          Add Expense
        </button>
        <button
          onClick={() => handleNavigation("/analytics")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg shadow transition duration-300 transform hover:scale-105"
        >
          Analytics
        </button>
        <button
          onClick={() => handleNavigation("/expense-tracker")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 rounded-lg shadow transition duration-300 transform hover:scale-105"
        >
          Expense Tracker
        </button>
        <button
          onClick={() => handleNavigation("/bill-splitting")}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 rounded-lg shadow transition duration-300 transform hover:scale-105"
        >
          Bill Splitting
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
