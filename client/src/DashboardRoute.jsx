import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddExpenseForm from "./components/AddExpenseForm";
import Analytics from "./pages/Analytics";
// import ExpenseTracker from "./ExpenseTracker";
// import BillSplitting from "./BillSplitting";
import Login from "./pages/Login"; // Assuming you have a SignIn component

const DashboardRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add-expense" component={AddExpenseForm} />
        <Route path="/analytics" component={Analytics} />
        {/* <Route path="/expense-tracker" component={ExpenseTracker} />
        <Route path="/bill-splitting" component={BillSplitting} /> */}
      </Switch>
    </Router>
  );
};

export default DashboardRoute;
