import React, {useState} from "react";

export const State = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState();

    const onClick = () => {
        setCount(state=> state + 1);
    }

    const onChangeInput = (event)=>{
        setInputValue(event.target.value);
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={onClick}>add 1</button> <br/><br/>
            <input value={inputValue} onChange={onChangeInput}/>
            <p>{inputValue}</p>
        </div>
    )
}