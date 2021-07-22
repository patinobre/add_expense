import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

// cria o componente ExpenseItem
const ExpenseItem = (props) => {

    //cria o array que vai passar a propriedade a ser modificada e a funçao que vai mudar a propriedade
    const [title, setTitle] = useState(props.title);

    // cria a função  que vai modificar a propriedade
    const clickHandler = () => {
        setTitle('Updated!');
    };

    //retorna o HTML/JSX
    return (

        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );

};

export default ExpenseItem