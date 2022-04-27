import { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const [chosenYear, setChosenYear] = useState();

  const filterChangeHandler = (year) => {
    setChosenYear(parseInt(year));
  };

  const yearFilter = (expense, year) => {
    if (!year) {
      return true;
    } else {
      return expense.date.getFullYear() === year;
    }
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={chosenYear}
        onFilterChange={filterChangeHandler}
      />
      {props.expenses
        .filter(expense => yearFilter(expense, chosenYear))
        .map((expense) => (
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
