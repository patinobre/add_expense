import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFIlter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

// cria o componente Expenses
const Expenses = (props) => {

  // chama o useState para gerenciar o estado das props do objeto
  const [filteredYear, setFilteredYear] = useState('2021');

  // manipula os valores do select
  const filterChangeHandler = (selectedYear) => {

    setFilteredYear(selectedYear);

  };

  // filtra o ano das despesas
  const filteredExpenses = props.items.filter(expense =>{

      return expense.date.getFullYear().toString() === filteredYear;

  });

 

  //retorna o HTML/JSX
  return (

    <div className="expenses">
      
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      
      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList items={filteredExpenses} />
      
    </div>

  );

};

export default Expenses;