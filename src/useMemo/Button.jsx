import {memo} from "react";


const Button = ({text, onClick}) => {
    console.log('render button')
    return <button onClick={onClick}>{text}</button>
}

export default memo(Button)