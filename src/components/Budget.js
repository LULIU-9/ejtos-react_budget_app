import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses,currency } = useContext(AppContext);
    //const [] = useState('');
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleSetBudget = (a) => {
        if(a > 20000) {
            alert("The value cannot exceed remaining funds "+ currency[0] +"2000");
            //setCost("");
            return;
        }
        if (a < totalExpenses) {
            alert("You cannot reduce the budget value lower than spending");
            //setCost("");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: a,
            
        });
        console.log(a);
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency[0]}<input id="budget" type="number" value={budget} min="0" step="10" onChange={(event)=>handleSetBudget(event.target.value)}/></span>
        </div>

        
    );
    
};

export default Budget;