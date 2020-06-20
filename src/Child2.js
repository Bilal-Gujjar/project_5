import React, { useReducer } from 'react';
import counterContext from './CounterReducer'
const Child2 = () => {

    let [state, dispatch] = useReducer( CounterReducer, 1 );
    
   
    
    return(
        <div>
            <h3>Vale add in Reducder</h3>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reduce</button>
        </div>
    )
}

export default Child2 ;
