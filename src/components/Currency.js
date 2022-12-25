import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {


    const {currency, dispatch} = useContext(AppContext);

    const handleChangeCurrency = (a) =>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: a,
            
        });
        console.log(a);
    }


    return(
        <div className='alert alert-secondary'>
            <span>

                <label>

                Currency({currency})

                <select onChange={(event)=>handleChangeCurrency(event.target.value)}>

                    <option value="$ Dollar" >$ Dollar</option>

                    <option value="£ Pound" >£ Pound</option>

                    <option value="€ Euro">€ Euro</option>

                    <option value="₹ Ruppee">₹ Ruppee</option>

                </select>

                </label>
            </span>
           
            
        </div>
    );
};
export default Currency;