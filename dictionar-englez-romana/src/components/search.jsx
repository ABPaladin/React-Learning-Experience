import {d} from '../data/dictionary';
import React, { useState } from 'react';
import { useEffect } from 'react'

export default function Search() {
    const [search, setSearch] = useState("")
    const [en, setEn] = useState(d)
    console.log(d)

    useEffect(() => {
        if (search === ""){
            console.log("search is empty")
            setEn(d);
        }else {
            handleSearch(search)
        }
    }, [search]) 
        
    const handleSearch = (data) => {
        setEn(d.filter(e => e.ro.includes(data)))
       }

return (
        <div className="search">

        <input type="text"  placeholder='Search...' value={search} onChange={(ev) => {
                setSearch(ev.target.value)
            }} />
            {
                 en.map(em =>( 
                    <div className="engleza">
                        {em.en}
                    </div>
                ))
            }
        </div>)}