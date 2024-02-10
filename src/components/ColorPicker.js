import React,{useState} from "react";

export default function Color(){
      const[background, setBackground]=useState('white');


   return(
       <div>
        <input type="color" onChange={(e)=>{
            setBackground(e.target.value);
        }} />
        <div style={ {background: background, width: 100,height: 100,border:'1px solid black'} } >

        </div>
       </div>
    )
}