import React, { useState } from "react";

export default function Player(){

    const pla=['pesho','ivan','georgi'];
    const [result,setresult]=useState(Array(pla.length).fill(0));
    const[total,settotal]=useState(0)

    function tr(p,index){
        return(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{p}</td>
              <td>{result[index]}</td>
              <td>
                <button onClick={()=>Increase(index)} >+</button>
                <button onClick={()=>Decrease(index)}>-</button>
              </td>
                
            </tr>
        )       
        
    }

    const Increase=(index)=>{
        const updateResult=[...result];
        updateResult[index]+=1;
        settotal(total+1)
        setresult(updateResult);
    }
    const Decrease=(index)=>{
        const updateResult=[...result];
        if(updateResult[index]>0){
            updateResult[index]-=1;
            settotal(total-1)
            setresult(updateResult);
        }
    }
    return(
        <div>
             <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>res</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                     {pla.map((p, index) => tr(p, index))}
                </tbody>
             </table>
             <span>Total: {total}</span>
        </div>
    )
}