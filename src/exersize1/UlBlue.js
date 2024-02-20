import React, { useState } from "react";
import './Ul.css';

export default function Blue(){

    const[items,setitems]=useState(['it1','it2','it3']);
    const [isblue,setisblue]=useState([false,false,false]);

    function handleClick(index){
        isblue[index]=!isblue[index];
        setisblue([...isblue]);
    }
    return(

        <div>
            <ul>
                {items.map((item,index)=>
                <li className={isblue[index] ? 'bg-blue' : ''}
                key={index}
                onClick={()=>{handleClick(index)}} >
                {item} - {index}
                </li>)}
            </ul>
        </div>
    )
}