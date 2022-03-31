import React from "react";
import "./Expense.css";
import ExItems from "./ExItems";
// import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <div className="expenses">
      <h2>Let's Go</h2>
     {
       props.item.map(
         expense=>(
          <ExItems
          date={expense.date}
          title={expense.title}
          amount={expense.amount}/>
         )
       )
     }
    </div>
  );
};

export default Expenses;
