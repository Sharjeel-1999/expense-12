import './Expenseform.css';
import React, {useState}  from 'react';
// import App from '../../App';


const ExpenseForm=(prop)=>{
    const [valTitle,SetvalTitle]=useState("");
    const ChangeTitle=(event)=>{
        SetvalTitle(event.target.value);
    };
    const [valAmount,SetvalAmount]=useState("");
    const ChangeAmount=(event)=>{
        SetvalAmount(event.target.value);
    };
    const [valDate,SetvalDate]=useState("");
    const ChangeDate=(event)=>{
        SetvalDate(event.target.value);
    };
    const submitHandler=(event)=>{
        event.perventDefault();
        const ExpenseData={
            Title:valTitle,
            Amount:valAmount,
            Date:new Date(valDate)
        }
        prop.onSaveExpenseDataHandler(ExpenseData);
        // console.log(ExpenseData)
        SetvalTitle('');
        SetvalAmount('');
        SetvalDate('');

    };
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={valTitle} type='text' onChange={ChangeTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={valAmount} type='number' min='0.01' step='0.01' onChange={ChangeAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={valDate} type='date' onChange={ChangeDate}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    );
}

//kya hwa beee

export default ExpenseForm;