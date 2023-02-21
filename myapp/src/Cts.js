import { createContext } from 'react';
import { data } from './data/data'

export const cts = createContext()  

export default function Cts({children}) {
    return(
        <cts.Provider value={data}>
            {children}
        </cts.Provider>
    )
}