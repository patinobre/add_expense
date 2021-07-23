import React, {useState} from 'react';
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

  //retorna o HTML/JSX
  return (

    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </div>

  );

};

export default Expenses;