
import React,{useState} from "react";

export default function Hide(){
    const[isShown,setIsShown]=useState(true);

    return(
        <div>
            <div>
                {isShown ? 'text':''}
            </div>
            <button onClick={()=>{
                setIsShown(!isShown)
            }} >Show</button>
        </div>
    )
}