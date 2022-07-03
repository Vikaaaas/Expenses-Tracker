//JUST FOR FORMS
import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
  const SaveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onSave(expenseData);
  }
  
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
    </div>
  )
}
