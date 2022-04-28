import { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [chosenYear, setChosenYear] = useState();

  const filterChangeHandler = (year) => {
    setChosenYear(parseInt(year));
  };

  const filteredExpenses = props.expenses.filter((expense) =>
    chosenYear ? expense.date.getFullYear() === chosenYear : true
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={chosenYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
