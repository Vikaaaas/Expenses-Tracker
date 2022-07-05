import {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
  const [year,setYear]=useState(2020)
  const onSaveHandler=(y)=>{
    setYear(y)
  }
  const filteredYear = props.items.filter(e=>{return(e.date.getFullYear().toString() === year);
    })
    
  
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={year} onSave={onSaveHandler}/>
      <ExpenseChart expenses={filteredYear}/>
      <ExpensesList items={filteredYear} />
      
      
     
    </Card>
    </div>
    
  );
}

export default Expenses;