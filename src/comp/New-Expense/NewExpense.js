import React from "react";
import './Newexpense.css';
import ExpenseForm from "./Expenseform";



const NewExpense=(prop)=>{
    const saveExpenseDataHandler=(enterExpenseData)=>{
        const expenseData={
            ...enterExpenseData,
            id:Math.random().toString()
        }
        prop.onAddExpense(expenseData);
        console.log(expenseData);
    };
return(
    <from>
    <div className="newexpense">
    <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler}/>
    </div>
    </from>
);
}



export default NewExpense;