import React, {useState} from 'react';
import {LifeCycle} from "./lifecycle/lifecycle";

const App = () => {
    const [count, setCount] = useState(0);
    console.log({count})

    return (<div>
        <button onClick={()=>setCount(state => state + 1)}>{count}</button>
        {count < 4 && <LifeCycle/>}
    </div>)
}

export default App;