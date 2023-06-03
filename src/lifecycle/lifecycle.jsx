import React, {useEffect, useState} from 'react';


export const LifeCycle = () => {
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        // выполняется на каждый рендер
        console.log('компонент отрисовался');
        // console.log(document.getElementById('lifeCycle'));
        return () => {
            console.log('выполняется перед след рендером (даже если его не будет)')
            // выполняется перед след рендером (даже если его не будет)
            // alert('момент перед след рендером');
        }
    })

    useEffect(() => {
        console.log('компонент отрендарился первый раз');
        return () => {
            console.log('компонент сейчас будет удален');
        }
    },[])

    useEffect(() => {
        console.log('inputValue был изменен', inputValue)
        return () => {
            console.log('след рендер', inputValue)
        }
    },[inputValue])



    return <div id='lifeCycle'>
        <h1>Life Cycle</h1>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)}/>
    </div>
}
