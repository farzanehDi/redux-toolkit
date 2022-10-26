import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrementCounter, increaseCounter,incrementByAmount} from "../../redux/counterSlice";

const Counter = () => {

    const dispatch = useDispatch();
    const counter=useSelector(state=>state.counter.value);

    return (
        <div>
            <p>counter: {counter}</p>
            <button onClick={()=>dispatch(increaseCounter())}>+1</button>
            <button onClick={()=>dispatch(decrementCounter())}>-1</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
        </div>
    );
};

export default Counter;