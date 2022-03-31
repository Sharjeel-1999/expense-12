import './index.css';
import Expenses from './comp/Expense/Expense';
import NewExpense from './comp/New-Expense/NewExpense';
import { useState } from 'react';





let Dummy_Expenses=[{
  id:'S1',
  title:"School Fees",
  amount:200,
  date:new Date(2022,2,17)
},{
  id:'S2',
  title:"Tuition-Fees",
  amount:150,
  date:new Date(2022,3,17)
},{
  id:'S3',
  title:"Coaching-Fees",
  amount:144,
  date:new Date(2022,3,12)
},{
  id:'S4',
  title:"Madarsa-Fees",
  amount:125,
  date:new Date(2022,5,11)
},
];
const App=()=> {

 const [expenses,setExpenses]=useState(Dummy_Expenses);


  const addExpenseHandler=(expense)=>{
   
    const updatedExpense=[expense,   ...expenses];
    setExpenses(updatedExpense);
  }

  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
   <Expenses item={expenses}/>
    </div>
  );
}

export default App;
