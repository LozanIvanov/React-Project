import React,{useState} from "react";
import InputS from "./Input";

export default function Input(){
    return(
        <div>
            <InputS
            title='Example'
            placeholder='Ex placeholder'
            onInput={(e)=>{
                console.log(e.target.value)
            }}
            />
        </div>
    )
}