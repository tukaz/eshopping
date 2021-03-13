import React from 'react'
import {useState,useEffect} from 'react';

const Test = () =>{

    const API = 'https://randomuser.me/api';
    const [count,setCount] = useState(0);
    const [data,setData] = useState(null);

    useEffect(()=> {
        fetch(API).then(
            r => r.json().then( 
                data => {
                    setData(JSON.stringify(data.results[0]))
                }
            )
        )
    },[]);
    return(
        <div>
            <h1>Hello Sandox</h1>
            <h2>Start here</h2>
            <button onClick={() =>setCount(count +1)} style={{padding:"50px"}}>{count ? count : "Counter"}</button>
            <p>{
                data
            }</p>
        </div>
    )
}

export default Test;