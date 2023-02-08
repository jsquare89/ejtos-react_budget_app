
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [budgetValue, setBudgetValue] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if(event.target.value > 20000){
            alert(`The value should not exceed 20,000 limit.`);
            return;
        }

        if(event.target.value < totalExpenses){
            alert(`The value should not be less than spending expenses.`);
            return;
        }

        setBudgetValue(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: budgetValue
        });
    }

    return (
        <div className='alert alert-secondary'>
            <label htmlFor="budget">Budget: {currency}</label>
            <input
                required='required'
                type='number'
                id='budget'
                value={budgetValue}
                className="ms-1"
                step={10}
                onChange={handleBudgetChange}
                >
            </input>
        </div>
    );
};

export default Budget;