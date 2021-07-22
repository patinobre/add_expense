import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// cria o component NewExpense
const NewExpense = () => {

    //retorna o HTML/JSX
    return (

        <div className="new-expense">
            <ExpenseForm />
        </div>

    );
};

export default NewExpense;