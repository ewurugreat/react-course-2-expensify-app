import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters  from "./ExpensListFilters";
const ExpenseDashboardPage = () => (
    <div>
    <ExpenseListFilters />
      <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;