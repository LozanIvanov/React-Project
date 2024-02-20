import React,{useState} from "react";
import Counter from "./PropStep";

export default function AppCount(){
    return(
        <div>
            <Counter st={1}/>
            <Counter st={5}/>
        </div>
    )
}