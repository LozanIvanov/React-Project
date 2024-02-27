import React from "react";

export default function ListRemove(props){
    
    function renderli(item,index){
        return(
            <li>
                <span>{item}</span>
                <button onClick={()=>{
                    props.delete(index)
                }} >X</button>
            </li>
        )
    }

    return(
        <>
        <ul>
           {props.items.map(renderli)}
        </ul>
        </>
    )
}