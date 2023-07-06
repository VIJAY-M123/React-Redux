import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, vijay, ajai } from '../Actions/Actions';

function Increment() {
    const dispatch = useDispatch();
    
    const name = useSelector(state => state.incrementReducer.count);
    const s = useSelector(state =>state.NameReducer.name)

    const Add = () => {
        dispatch(increment())
    };

    const Delete = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h2>{name}</h2>
            <button onClick={Add}>+</button>
            <button onClick={Delete}>-</button>


            <h3>{s}</h3>
            <button onClick={()=>dispatch(vijay())}>Vijay</button>
            <button onClick={()=>dispatch(ajai())}>Ajai</button>
        </div>
    );
}

export default Increment;