import React, {useEffect} from 'react';
import {Memo} from "./useMemo";
import {MyComponent} from "./ClassComponent";

const ComponentWithError = () => {

    useEffect(()=>{
        // throw new Error('error');
    },[]);

    return (
        <div>
            <h1>Component</h1>
        </div>
    )
}

const App = () => {

    return (<div>
        <MyComponent><ComponentWithError/></MyComponent>
    </div>)
}

export default App;