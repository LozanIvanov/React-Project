import React,{useState} from "react";

export default function User(props){
    return(
        <div>
            <h2>{props.name} - {props.age}</h2>
            <ul>
                {props.interests.map(x=><li>{x}</li>)}
            </ul>
        </div>
    )
}