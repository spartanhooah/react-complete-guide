import { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const [chosenYear, setChosenYear] = useState(2022);

  const filterChangeHandler = (year) => {
    setChosenYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={chosenYear}
        onFilterChange={filterChangeHandler}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;
