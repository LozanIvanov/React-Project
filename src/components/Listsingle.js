import React,{useState} from "react";

export default function Listsingle(props){
const[show,setshow]=useState(false);
    return(
        <>
          <div>
            <span> {props.name} {props.lastname}</span>
            <button  
            onClick={()=>{
             setshow(!show);
            }}
            >Show</button>

          </div>
          <div>
            {show &&
            <div>{props.description} </div>
            }
          </div>
        </>
    )
}