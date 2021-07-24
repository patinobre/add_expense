import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

// cria o componente ExpenseItem
const ExpenseItem = (props) => {

    //retorna o HTML/JSX
    return (

        <li>
            <div className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                </div>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </li>
    );

};

export default ExpenseItem