import {d} from '../data/dictionary';
import React, { useState } from 'react';
import { useEffect } from 'react'

export default function Search() {
    const [search, setSearch] = useState("")
    const [emojis,setEmojis] = useState(d)
    
    useEffect(() => {
        if (search === ""){
            console.log("search is  empty")
            setEmojis(d);
        }else {
            handleSearch(search)
        }
    }, [search])    
    
    const handleSearch = (data) => {
        setEmojis(d.filter(e => e.name.includes(data)))
       }
console.log(d)

return (
        <div className="search">
            <input type="text"  placeholder='Search...' value={search} 
            onChange={(ev) => {
                setSearch(ev.target.value)
               // handleSearch(search)
            }} />
            {
            emojis.map(em =>( 
                <div className="emoji">
                    {em.emoji}
                </div>
            ))
        }
    </div>
)}