//JUST FOR FORMS
import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
  const [flag,setFlag]=useState(0);
  const SaveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onSave(expenseData);
  }

  const toogle=()=>{
    setFlag(0);
  }
  
  return (
    <div className='new-expense'>
      {flag?<ExpenseForm toogleFlag={toogle} onSaveExpenseData={SaveExpenseDataHandler}/>:<div><button onClick={()=>setFlag(1)}>Add Expense</button></div>}
        
        
    </div>
  )
}
