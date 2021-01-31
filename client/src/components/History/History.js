import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function History() {
    
    const [history, setHistory] = useState([])

    useEffect( () => {
        axios({
            method:"GET",
            url: 'http://127.0.0.1:8000/api/history/',
        }).then(response => {
            setHistory(response.data)
        })
    },[])

    return (
        <div>
            {history.map(p => {
                return(
                    <div>{p.title}</div>
                )
            })}
        </div>
    )
}

export default History;