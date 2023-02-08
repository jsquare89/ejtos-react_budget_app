
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleSelector = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }

    const getCurrencyToDisplay = (currency) => {
        switch (currency){
            case '$':
                return '$ Dollar';
            case '£':
                return '£ Pound';
            case '€':
                return '€ Euro';
            case '₹':
                return '₹ Ruppee';
            default:
                return 'Unknown Currency';
        }
    }
    
    return (
        <div className='alert alert-secondary'>

            <label for ="currencySelector">Currency ({getCurrencyToDisplay(currency)}) </label>
            <select className="form-select bg-green" name="currency" id="currencySelector" defaultValue={currency} onChange={handleSelector}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
</div>

        
    );
};

export default CurrencySelector;