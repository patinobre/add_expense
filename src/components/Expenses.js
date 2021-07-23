import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFIlter'
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
      {filteredExpenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        ))}

    </div>

  );

};

export default Expenses;