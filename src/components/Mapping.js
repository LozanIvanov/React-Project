import React,{useState} from "react";

export default function Maps(){
    const [name,setname]=useState(['gosho','pesho'])

    function printName(){
        return(
            <div>
                {names.map(x=><div>{x}</div> )}           
                </div>
        )
    }
    return(
        <div>
            {printName()}
        </div>
    )
}