import { cts } from './Cts';
import { useContext } from 'react';

export default function Main() {
    const d = useContext(cts);
    return(
        <div>
            {d}
        </div>
    )   
}