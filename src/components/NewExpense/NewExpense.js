import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// cria o component NewExpense
const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {

            ...enteredExpenseData,
            id: Math.random().toString()
            
        };

        props.onAddExpense(expenseData);

    };

    //retorna o HTML/JSX
    return (

        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>

    );
};

export default NewExpense;