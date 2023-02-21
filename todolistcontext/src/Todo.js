import { createContext, useState } from "react";

export const todo = createContext()

export default function Todo({children}) {
    const [number, setNumber] = useState([])

    return (
        <todo.Provider value={[number, setNumber]}>
            {children}
        </todo.Provider>
    )
}