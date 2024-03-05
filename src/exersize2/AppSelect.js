import React,{useState} from "react";

export default function Select(){

    const[selectOp,setSelectOp]=useState([
        {label: 'Option 1',value: 1},
        {label: 'Option 2',value: 2},
        {label: 'Option 3',value: 3}
    ]);
    const[cur,setCur]=useState('');
    const[array,setarray]=useState([]);

    return(
        <div>
            <select onChange={(e)=>{
                setCur(e.target.value);
            }} value={cur} >
                <option value='' > Select</option>
                {selectOp.map(x =>
                <option value={x.value}>{x.label}</option>)}
            </select>
            <button onClick={()=>{
                if(cur !=''){
                    array.push(cur);
                    setarray([...array]);
                    setCur('')
                }
            }}>Add</button>
            <div>
                <ul>
                    {array.map((i,index)=><li>{i}
                    <button onClick={()=>{
                        array.splice(index,1);
                        setarray([...array])
                    }}>X</button>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}