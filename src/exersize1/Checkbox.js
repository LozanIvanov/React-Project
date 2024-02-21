import React,{useState} from "react";

export default function Check(){
    const[items,setitems]=useState(['item1','item2','item3']);
    const[counter,setcounter]=useState(0);
     
function render(item){
    return(
        <li>
            <input type="checkbox"
            onClick={(e)=>{
                setcounter(e.target.checked ? counter+1 :counter-1)
            }}
            />
            <span>{item}</span>
        </li>
    )
}

    return(
        <div>
            Counter:{counter}
             {items.map(render)}
        </div>
    )
}