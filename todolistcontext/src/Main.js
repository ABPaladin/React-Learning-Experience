import { todo } from './Todo'
import { useState, useContext } from 'react'

export default function Main() {
    const [number, setN] = useContext(todo)
    const [input, setInput] = useState("")
    //const [id, setId] = useState([])
    const handleDelete = (id) => {
        setN(number.filter(t => t.id !== id))
        }
    
    const listItem = number.map((number) =>
        <>
        <li>{}{number}</li>
        <button onClick={handleDelete}>-</button>
        </>
    );
    return (
        <div>
            <h1>Todowka,Temp,Time,Rugaciune App by Alexandru Barbanoua full original app</h1>
            <input value={input} onChange={(e) =>
            setInput(e.target.value)} />
            <button onClick={() => setN([...number, input])}>+</button>
            <button onClick={() => setN([])}>clear</button>
            {listItem}
        </div>
    )
}