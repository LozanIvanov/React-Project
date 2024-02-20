import React,{useState} from "react";

export default function Counter(props){
    const[counter,setcounter]=useState(0);

    return(
        <div>
            <button
            onClick={()=>{
                setcounter(counter + props.st)
            }}
            >Click</button>
            <div>{counter}</div>
        </div>
    )
}