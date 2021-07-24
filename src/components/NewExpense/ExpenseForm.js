import React, { useState } from 'react';
import './ExpenseForm.css';

// cria o componente ExpenseForm
const ExpenseForm = (props) => {

    // chama a função useState do react para lidar com a mudança de estado/propriedade dos objetos
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //escuta a mudança de estado dos inputs 
    const titleChangeHandler = (event) => {

        setEnteredTitle(event.target.value);

    };

    const amountChangeHandler = (event) => {

        setEnteredAmount(event.target.value);

    };

    const dateChangeHandler = (event) => {

        setEnteredDate(event.target.value);

    };

    // define o que fazer com o formulario
    const submitHandler = (event) => {

        // evita o comportamento automatico do browser de recarregar a página quando o botão submit é clicado
        event.preventDefault();

        // cria um único objeto com todas as informações do formulário
        const expenseData = {

            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)

        };

        // passa as propriedades do objeto para outro componente
        props.onSaveExpenseData(expenseData);

        // retorna o input ao valor inicial para limpar a página
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };
    
    //retorna o HTML/JSX
    return (

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>

            </div>

            <div className="new-expense__actions" >
                <button type="button" onCLick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>

        </form>

    );

};

export default ExpenseForm;