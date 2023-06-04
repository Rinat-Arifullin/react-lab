import {useCallback, useMemo, useState} from "react";
import Button from "./Button";

const filterById = (data, onlyOdd)=>{
    console.log('ооочень сложные вычисления')
    return data.filter(todo => !onlyOdd || todo.id % 2 === 0)
}

export const Memo = () => {
    const [inputValue, setInputValue] = useState('');
    const [onlyOdd, setOnlyOdd] = useState(false);

    const [todos, setTodos] = useState([
        {id: 1, text: 'Learn React'},
    ])

    const onAdd = useCallback(() => {
        setTodos([...todos, {id: todos.length + 1, text: inputValue}])
    },[])

    const data = useMemo(()=>filterById(todos, onlyOdd),[todos, onlyOdd]);

    return <div>
        <input value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
        <Button text='add' onClick={onAdd}/>
        <button onClick={()=>setOnlyOdd(state=>!state)} >only odd id</button>
        <div>
            {data.map(todo => <div key={todo.id}>{todo.id}:{todo.text}</div>)}
        </div>
    </div>
}