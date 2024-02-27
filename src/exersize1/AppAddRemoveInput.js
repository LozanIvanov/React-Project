import React,{useState} from "react";
import ListRemove from "./ListInput";

export default function AppRemoveAdd(){
       const[items,setitems]=useState([]);
       const[inputvalue,setinputvalue]=useState('');
    return(
        <div>
             <div>
                <input type='text'
                value={inputvalue}
                onInput={(e)=>{
                    setinputvalue(e.target.value)
                }}/>
                <button onClick={()=>{
                    items.push(inputvalue);
                    setitems([...items]);
                    setinputvalue('');
                }} >Add</button>
             </div>
             <div>
                <ListRemove 
                items={items}
                delete={(index)=>{
                    items.splice(index,1);
                    setitems([...items])
                }}
                /> 
             </div>
        </div>
    )
}