import React, {useState} from 'react';

export default function(){
    const [counter,setNumber]=useState(0);

    return (
       <div> 
        <div> Counter:{counter}
        </div>
        <button onClick={()=>{
            setNumber(counter+1)
        }}>+</button>
        <button onClick={()=>{
            setNumber(counter-1)
        }}>-</button>
        </div>
    );
}
